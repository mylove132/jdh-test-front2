module.exports = {
    publicPath: './', // 默认'/'，部署应用包时的基本 URL
    productionSourceMap: false,
    devServer: {
      before(app){
        app.get("/api/ui-script/list",(req,res)=>{
          res.json({
            code:10000,
            msg:"",
            data:[{
              name: "测试",
              code: "",
              lang: "java",
              desc: "",
              theme: ""
            }]
          })
        })
      },
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