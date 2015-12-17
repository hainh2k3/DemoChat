
var http = require('http');
var io = require('socket.io').listen(8000);
var fs = require('fs');

io.sockets.on('connection', function (socket) {
	socket.on('tn_den_server', function (data) {
		var _dt = new Date();
		var _tg = _dt.getHours() + ':' + _dt.getMinutes() + ':' + _dt.getSeconds();
		io.sockets.emit('tn_den_client', { message: data['message'] , thoigian : _tg });
	});
});



function serverListener(request, response) {
	fs.readFile('www/index.html', { 'Encoding': 'utf-8' }, function (err, data) {
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.write(data);
		response.end();
	});
}

http.createServer(serverListener).listen(80);