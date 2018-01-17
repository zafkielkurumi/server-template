(function () {
    const fs = require('fs');
    const path = require('path');
    const defaultOptions = { include: /^\/(api|static|public|service)/ }
    function readBuiltFile (filename) {
        return fs.readFileSync(path.relative(process.cwd(), `../public/${filename}`), 'utf-8')
    }
    const indexHtml= readBuiltFile('index.html')
    module.exports =function (options) {
        options =Object.assign( defaultOptions,options)
        return async function spa(ctx, next) {
            if(!options.include.test(ctx.url))
            {
                await  new Promise(resolve => {
                    if (indexHtml) {
                        resolve()
                    }
                }).then(render)
                function render() {
                    const res=ctx.res
                    res.statusCode=200
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    res.end(`${indexHtml}`)
                    return
                }
            }else {
                return next()
            }
        }
    }

})()