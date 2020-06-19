const Horseman = require('node-horseman')
const horseman = new Horseman()

horseman
    .open('http://www.fundamentus.com.br/')
    .pdf('./exemplo7/arquivo.pdf',  {
        format: 'A4',
        orientation: 'portrait',
        margin: '1cm'
    })
    .then(function() { console.log(`Ok`) })
    .catch(function(err) { console.log(`Erro: ${err}`) })
    .close()
