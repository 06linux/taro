import * as path from 'path'
import { promisify } from 'util'
import { IProjectConfig, IH5Config, IDeviceRatio } from '@tarojs/taro/types/compile'
import _, { fromPairs, get, merge } from 'lodash'
import * as rimraf from 'rimraf'

import CONFIG from '../config'
import {
  recursiveMerge,
  resolveScriptPath,
  checkCliAndFrameworkVersion
} from '../util'
import { BUILD_TYPES, PROJECT_CONFIG } from '../util/constants'
import * as npmProcess from '../util/npm'
import { IBuildOptions, IOption } from '../util/types'
import Builder from '../build'

const pRimraf = promisify(rimraf)

const defaultH5Config: Partial<IH5Config> = {
  router: {
    mode: 'hash',
    customRoutes: {},
    basename: '/'
  }
}

type PageName = string
type FilePath = string

class Compiler {
  projectConfig: IProjectConfig
  h5Config: IH5Config
  sourceRoot: string
  sourcePath: string
  outputPath: string
  outputDir: string
  entryFilePath: string
  entryFileName: string
  pathAlias: {
    [key: string]: string
  }
  pages: [PageName, FilePath][] = []
  isUi: boolean

  constructor (public appPath: string, entryFile?: string, isUi?: boolean) {
    const projectConfig = recursiveMerge({
      h5: defaultH5Config
    }, require(path.join(appPath, PROJECT_CONFIG))(merge))
    this.projectConfig = projectConfig
    const sourceDir = projectConfig.sourceRoot || CONFIG.SOURCE_DIR
    this.sourceRoot = sourceDir
    const outputDir = projectConfig.outputRoot || CONFIG.OUTPUT_DIR
    this.outputDir = outputDir
    this.h5Config = get(projectConfig, 'h5')
    this.sourcePath = path.join(appPath, sourceDir)
    this.outputPath = path.join(appPath, outputDir)
    this.entryFilePath = resolveScriptPath(path.join(this.sourcePath, entryFile || CONFIG.ENTRY))
    this.entryFileName = path.basename(this.entryFilePath)
    this.pathAlias = projectConfig.alias || {}
    this.isUi = !!isUi
  }

  async clean () {
    const outputPath = this.outputPath
    try {
      await pRimraf(outputPath)
    } catch (e) {
      console.log(e)
    }
  }

  async buildDist ({ watch, port }: IBuildOptions) {
    const isMultiRouterMode = get(this.h5Config, 'router.mode') === 'multi'
    const entryFileName = this.entryFileName
    const projectConfig = this.projectConfig
    /** 不是真正意义上的IH5Config对象 */
    const h5Config: IH5Config & {
      deviceRatio?: IDeviceRatio
      env?: IOption
    } = this.h5Config
    const outputDir = this.outputDir
    const sourceRoot = this.sourceRoot
    const pathAlias = this.pathAlias

    const getEntryFile = (filename: string) => {
      return path.join(this.sourcePath, filename)
    }

    const entryFile = path.basename(entryFileName)
    const defaultEntry = isMultiRouterMode
      ? fromPairs(this.pages.map(([pagename, filePath]) => {
        return [filePath, [getEntryFile(filePath)]]
      }))
      : {
        app: [getEntryFile(entryFile)]
      }
    if (projectConfig.deviceRatio) {
      h5Config.deviceRatio = projectConfig.deviceRatio
    }
    if (projectConfig.env) {
      h5Config.env = projectConfig.env
    }
    recursiveMerge(h5Config, {
      alias: pathAlias,
      copy: projectConfig.copy,
      defineConstants: projectConfig.defineConstants,
      designWidth: projectConfig.designWidth,
      entry: merge(defaultEntry, h5Config.entry),
      env: {
        TARO_ENV: JSON.stringify(BUILD_TYPES.H5)
      },
      isWatch: !!watch,
      outputRoot: outputDir,
      babel: projectConfig.babel,
      csso: projectConfig.csso,
      uglify: projectConfig.uglify,
      sass: projectConfig.sass,
      plugins: projectConfig.plugins,
      port,
      sourceRoot
    })
    const webpackRunner = await npmProcess.getNpmPkg('@tarojs/webpack-runner', this.appPath)
    webpackRunner(this.appPath, h5Config)
  }
}

export { Compiler }

export async function build (appPath: string, buildConfig: IBuildOptions, builder: Builder) {
  process.env.TARO_ENV = BUILD_TYPES.H5
  await checkCliAndFrameworkVersion(appPath, BUILD_TYPES.H5)
  const compiler = new Compiler(appPath)
  await compiler.clean()
  if (compiler.h5Config.transformOnly !== true) {
    await compiler.buildDist(buildConfig)
  }
}
