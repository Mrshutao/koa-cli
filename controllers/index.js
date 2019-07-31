const router = require("koa-router")();
const main = require("./main");

const index = async (ctx, next) => {
	await ctx.render("index");
};

const init = function() {
	router.get("/ad-crown/api/*", (ctx, next) => main(ctx, next, "get"));
	router.post("/ad-crown/api/*", (ctx, next) => main(ctx, next, "post"));
	router.all("*", (ctx, next) => index(ctx, next));
};

module.exports = function(dir) {
	init();
	return router.routes();
};
