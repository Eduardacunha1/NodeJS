var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('café, livros e musica');
  console.log( 'servidor rodando');
}).listen(8080);
