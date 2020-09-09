var fs = require('fs')

fs.rename('arquivonovo.txt', 'arquivodiferente.txt',
    function(err) {
        if (err)
            throw err;
    }

);

console.log('Arquivo Renomeado com Sucesso')