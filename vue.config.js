const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  lintOnSave: false,
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211'
        // pathRewrite: { '^/api': '' },
      },
    },
  }
})
