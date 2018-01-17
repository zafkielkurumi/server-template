module.exports = async function (ctx, next) {
    try {
        // Node标识
        ctx.set('X-Proxy', 'Node Server')
        await next()
    } catch (err) {
        ctx.status = err.status || 500
        ctx.body = 'We are sorry. Internal server error occurred.'
        ctx.app.emit('error', err, ctx)
    }
}
