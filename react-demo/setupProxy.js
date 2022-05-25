// import proxy from "http-proxy-middleware";

const proxy=required('http-proxy-middleware')


module.export = function (App) {
    App.use(
        proxy('/api',{
            //代理地址后端地址
            target:'',
            ChangeOrigin:true,
            //重写路径
            pathRewrite: {
                '^/api':''
            }

        }),
        proxy('/api',{
            //代理地址后端地址
            target:'',
            ChangeOrigin:true,
            //重写路径
            pathRewrite: {
                '^/api':''
            }

        })
    )
}