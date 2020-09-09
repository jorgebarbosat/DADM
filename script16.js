var fs = require('fs')

fs.unlink('arquivooutro.txt',
    function(err){
        if(err)
            throw err
    }
);

console.log('Arquivo excluido com sucesso')