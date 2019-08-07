const koa = require("koa");
const path = require("path");
const controller = require("./controllers");
const bodyParser = require("koa-bodyparser");
const config = require("./config/default");
const static = require("koa-static");
const cors = require("koa2-cors");
const app = new koa();

var appMgr = {
	init: function() {
		app.use(static(path.join(__dirname, "./dist")));
		app.use(bodyParser());
		app.use(cors());
		app.use(controller());
	}
};
appMgr.init();
app.listen(config.port);
console.log(`app start at port ${config.port}...`);
