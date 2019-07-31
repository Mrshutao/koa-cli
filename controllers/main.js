const request = require("request");
const config = require("../config/default.js");
module.exports = async (ctx, next, method) => {
	const url = config.apiServer + ctx.url;
	// console.log(ctx);
	return new Promise((resolve, reject) => {
		request(
			{
				url: url,
				method: method,
				headers: {
					//设置请求头
					"content-type": "application/json",
					cookie: ctx.header.cookie
				},
				body: JSON.stringify(ctx.request.body)
			},
			(error, response, body) => {
				// console.log(body);
				if (error) {
					const res = { type: "ERROR", data: { reason: "服务端错误，请联系管理人员" } };
					ctx.body = JSON.stringify(res);
				} else {
					ctx.body = body;
				}
				resolve();
			}
		);
	});
};
