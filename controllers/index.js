const index = async (ctx, next) => {
	ctx.body = "hello!";
};

module.exports = {
	"GET /": index
};
