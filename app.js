const koa = require("koa");
const controller = require("./controller");
const bodyParser = require("koa-bodyparser");
const config = require("./config/default");
const views = require("koa-views");
const cors = require("koa2-cors");
const app = new koa();

var appMgr = {
	init: function() {
		app.use(views("dist", { extension: "html" }));
		app.use(bodyParser());
		app.use(cors());
		app.use(controller());
	}
};
appMgr.init();
app.listen(config.port);
console.log(`app start at port ${config.port}...`);
