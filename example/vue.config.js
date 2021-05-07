const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  outputDir: '../docs',
  productionSourceMap: false,
  configureWebpack: config => {
    const plugins = [new MonacoWebpackPlugin()]
    config.plugins.push(...plugins)
  }
}
