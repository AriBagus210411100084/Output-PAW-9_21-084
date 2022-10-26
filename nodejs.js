var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Nama : Ari Bagus Firmansyah <br> Nim : 210411100084');
}).listen(8080);