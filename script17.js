var http = require('http')
var url = require('url')

var end = 'http://localhost:8080/data.html?dia=17&mes=3&ano=2003'
var dados = url.parse(end, true);