var login = async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || ''
    console.log(`signin with name: ${name}, password: ${password}`)
    if (name === 'koa' && password === '12345') {
        ctx.body = JSON.stringify({ hasError: false, data: { login: true } })
    } else {
        ctx.body = JSON.stringify({ hasError: false, data: { login: false } })
    }
}

var index = async (ctx, next) => {
    let res = JSON.stringify({ a: 1, b: 2 })
    ctx.type = 'application/json'
    ctx.body = res
}

module.exports = {
    'GET /': index,
    'POST /login': login,
}
