module.exports = {
    publicPath: './', // 默认'/'，部署应用包时的基本 URL
    productionSourceMap: false,
    devServer: {
      proxy: 'http://localhost:9000'
    },
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import "~@/assets/styles/theme/mixin.scss";
          `
        }
      }
    }
  }