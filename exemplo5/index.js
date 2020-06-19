const Horseman = require('node-horseman')
const horseman = new Horseman()

horseman
    .open('http://www.fundamentus.com.br/')
    .screenshot('./exemplo5/image.png')
    .then(function() { console.log(`Ok`) })
    .catch(function(err) { console.log(`Erro: ${err}`) })
    .close()
