const spaMiddleWare = require('./spaMiddleWare');
const staticMiddleWare = require('./staticMiddleWare');
const errorMiddleWare =require('./errorMiddleWare');
const errorhandler = require('errorhandler');
const routes = require('routeMiddleWare');


const MiddleWares = [
    // 允许跨域
    require('koa-cors')({origin: 'http://localhost:8120'}),
    // 错误处理1
    errorMiddleWare,
    // 错误处理2
    // errorhandler(),
    // 简单日志
    require('koa-logger')(),
    // 静态资源
    staticMiddleWare(),
    // 压缩响应
    require('koa-compress')(),
    // 单页应用,
    spaMiddleWare(),
    // 处理路由请求
    routes.middleware()
];
module.exports=MiddleWares;