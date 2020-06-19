const Horseman = require('node-horseman')
const horseman = new Horseman()

horseman
    .open('http://www.fundamentus.com.br/')
    .type('input[name="papel"]', 'VVAR3')
    .click('input.botao')
    .waitForNextPage()
    .count('table.w728')
    .then(function(counter) { console.log(`Tabelas: ${counter}`) })
    .catch(function(err) { console.log(`Erro: ${err}`) })
    .close()
