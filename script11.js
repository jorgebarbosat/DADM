var fs = require('fs');
var texto = "Segundo Steve Jobs, design é função e nao forma";

fs.writeFile('arquivo3.txt', texto,
        function(err,file) {
            if(err)
                throw err;
        }

)

console.log('Arquivo gravado com sucesso!');