/* eslint @typescript-eslint/no-var-requires: 0 */
const zopfli = require('@gfx/zopfli')
const CompressionPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const MAX_CYCLES = 30
let numCyclesDetected = 0

module.exports = {
  filenameHashing: false,

  // publicPath: './', // Remove this if html5 history.pushState is used
  configureWebpack: config => {
    config.output.filename = '[name].js'
    config.output.webassemblyModuleFilename = 'webassembly.wasm'
    config.plugins.push(
      new MomentLocalesPlugin({
        localesToKeep: ['en']
      })
    )
    /* config.plugins.push(
      new WasmPackPlugin({
        crateDirectory: __dirname,
        forceMode: process.env.PRODUCTION !== 'undefined' ? 'production' : 'development'
      })
    ) */
    if (typeof process.env.PRODUCTION !== 'undefined')
      config.plugins.push(new CompressionPlugin({
        test: /\.(js|css|html|svg|wasm)$/,
        threshold: 2000,
        minRatio: 0.8,
        compressionOptions: {
          numiterations: 15
        },
        algorithm(input, compressionOptions, callback) {
          return zopfli.gzip(input, compressionOptions, callback)
        }
      }))
    else {
      config.plugins.push(new CircularDependencyPlugin({
        onStart({ compilation }) {
          numCyclesDetected = 0
        },
        onDetected({ module: webpackModuleRecord, paths, compilation }) {
          numCyclesDetected++
          compilation.warnings.push(new Error(paths.join(' -> ')))
        },
        onEnd({ compilation }) {
          if (numCyclesDetected > MAX_CYCLES) {
            compilation.errors.push(new Error(
              `Detected ${numCyclesDetected} cycles which exceeds configured limit of ${MAX_CYCLES}`
            ))
          }
        }
      }))
    }
    if (typeof process.env.BUNDLE_ANALYZE !== 'undefined')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      }))
  },

  chainWebpack: config => {
    config.optimization.splitChunks(false)
  },

  css: {
    extract: {
      filename: '[name].css'
    }
  },

  productionSourceMap: false
}
