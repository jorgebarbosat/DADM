var fs = require('fs');

fs.writeFile('arquivo2.txt', 'Desenvolvimento de Aplicações Distribuidas e Moveis',
        function(err,file) {
            if(err)
                throw err;
        }

)

console.log('Arquivo gravado com sucesso!');