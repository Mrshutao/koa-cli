const koa = require('koa')
const controller = require('./controller')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const app = new koa()

var appMgr = {
    init: function() {
        app.use(bodyParser())
        app.use(cors())
        app.use(controller())
    },
}
appMgr.init()
app.listen(3000)
console.log('app start at port 3000...')
