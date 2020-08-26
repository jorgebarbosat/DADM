var http = require('http');

http.createServer(
    function(req,res) {
        res.writeHead(200, {'content-type' : 'text/plain; charset=UTF-8'});

        res.write(req.url);

        res.end()
    }
).listen(8080)

console.log('Servidor Iniciado na porta 8080. Pressione Ctrl + C para encerrar');