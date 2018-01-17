const Koa = require("koa");
const middleWares = require('./utils/middleWare/middleWares');
const app =new Koa();

middleWares.forEach( middleWare => {
    if(!middleWare) { return; }
    app.use(middleWare);
});
module.exports = app;


