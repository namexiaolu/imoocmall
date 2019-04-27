let url = require('url');
let util = require('util');
let http = require('http');
let fs = require('fs');



let server = http.createServer((req, res) => {
	// res.statusCode = 200;
	// res.setHeader("Content-Type","text/plain;chartset=utf-8");

	var pathname = url.parse(req.url).pathname;
	console.log('file:' + pathname.substring(1))
	fs.readFile(pathname, substring(1), function(err, data) {
		if (err) {
			res.writeHeade(404, {
				'Content-Type': 'text/heml'
			});
		} else {
			res.writeHeade(200, {
				'Content-Type': 'text/heml'
			});
			res.write(data.toString());
		}
		res.end();
	});



});
server.listen(3000, '127.0.0.1', () => {
	console.log("chenggongla 127.0.0.1:3000")
});
