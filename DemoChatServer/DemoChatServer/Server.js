
var http = require('http');


function serverListener(request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plaint' });
	response.write("ok server started!");
	response.end();
}

http.createServer(serverListener).listen(80);