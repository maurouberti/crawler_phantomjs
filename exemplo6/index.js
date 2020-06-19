const Horseman = require('node-horseman')
const horseman = new Horseman()

horseman
    .open('http://www.fundamentus.com.br/')
    .includeJs('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js')
    .then(function() { console.log(`Ok`) })
    .catch(function(err) { console.log(`Erro: ${err}`) })
    .close()
