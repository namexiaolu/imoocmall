let user= require('./User');
let url = require('url');
let util = require('util');
let http = require('http');


console.log(`userName:${user.userName}`);
console.log(`iam:${user.sayHello()}`);


let server =http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader("Content-Type","text/plain;chartset=utf-8");
	
	console.log("url:"+req.url);
	
	
	
	
	res.end(util.inspect(url.parse("http://127.0.0.1:3000/123123123?a=123#tag")));
	
	});
	server.listen(3000,'127.0.0.1',()=>{
		console.log("chuangjainwanchaeng 127.0.0.1:3000")
});