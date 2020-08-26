var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain; charset=UTF-8'});
    res.write('Desenvolvimento de Aplicações Distribuidas e Moveis');
    res.end();
}).listen(8080);

console.log('Servidor Iniciado na porta 8080. Pressione Ctrl + C para encerrar');