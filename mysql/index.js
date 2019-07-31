var mysql = require("mysql");
var colors = require("colors");
var config = require("../config/default.js");

var pool = mysql.createPool({
	host: config.database.HOST,
	user: config.database.USERNAME,
	password: config.database.PASSWORD,
	database: config.database.DATABASE
});

class Mysql {
	constructor() {}
	query(sql, params) {
		console.log("查询开始...".green);
		return new Promise((resolve, reject) => {
			pool.query(sql, params, function(error, results, fields) {
				if (error) {
					console.log(`查询失败：${error.message}`.red);
					reject(error);
				} else {
					console.log(`查询结果：${JSON.stringify(results)}`.green);
					resolve(results);
				}
			});
		});
	}
}
const Sql = new Mysql();
module.exports = Sql;
