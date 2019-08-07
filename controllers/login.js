const mysql = require("../mysql");
const login = async (ctx, next) => {
	var name = ctx.request.body.name || "",
		password = ctx.request.body.password || "";

	await mysql.query("select * from student where(name=? and password=?)", [name, password]).then(res => {
		if (res && res.length > 0) {
			ctx.body = JSON.stringify({ hasError: false, data: { login: true } });
		} else {
			ctx.body = JSON.stringify({ hasError: false, data: { login: false } });
		}
	});
};
module.exports = {
	"POST /login": login
};
