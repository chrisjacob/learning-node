var 
net = require('net'),
server = net.createServer( function (client) {
	client.end('hello world\r\n');
});

server.listen(8000, '127.0.0.1');
