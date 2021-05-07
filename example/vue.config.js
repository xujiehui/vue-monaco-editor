const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  configureWebpack: config => {
    const plugins = [new MonacoWebpackPlugin()]
    config.plugins.push(...plugins)
  }
}
