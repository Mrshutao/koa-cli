const koa = require("koa");
const path = require("path");
const controller = require("./controller");
const bodyParser = require("koa-bodyparser");
const config = require("./config/default");
const static = require("koa-static");
const cors = require("koa2-cors");
const koaBody = require("koa-body");
const app = new koa();

var appMgr = {
	init: function() {
		app.use(static(path.join(__dirname, "./upload/")));
		app.use(bodyParser());
		app.use(cors());
		app.use(
			koaBody({
				multipart: true,
				formidable: {
					maxFileSize: 200 * 1024 * 1024
				}
			})
		);
		app.use(controller());
	}
};
appMgr.init();
app.listen(config.port);
console.log(`app start at port ${config.port}...`);
