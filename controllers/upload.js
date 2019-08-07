const fs = require("fs");
const path = require("path");
const upload = async (ctx, next) => {
	try {
		const file = ctx.request.files.filename; // 获取上传文件
		const reader = fs.createReadStream(file.path); // 创建可读流
		const ext = file.name.split(".").pop(); // 获取上传文件扩展名
		const filePath = path.join(process.cwd(), `upload/${Math.random().toString()}.${ext}`);
		const upStream = fs.createWriteStream(filePath); // 创建可写流
		reader.pipe(upStream); // 可读流通过管道写入可写流
		ctx.body = `上传成功,图片地址是：http://127.0.0.1:3000/upload/${Math.random().toString()}.${ext}`;
	} catch (err) {
		ctx.body = "上传失败";
	}
};
module.exports = {
	"POST /upload": upload
};
