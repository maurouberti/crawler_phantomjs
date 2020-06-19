const request = require('request');
const fs = require('fs');
const Tesseract = require('tesseract.js');
const filename = './exemplo4/image.png';

var createImg = fs.createWriteStream(filename);

request('http://www.ufrgs.br/acessibilidadedigital/wp-content/uploads/2018/10/fontesDiferentes-300x150.png')
    .pipe(createImg)
    .on('close', () => {
        console.log('IMG Criada');
        Tesseract
            .recognize(filename)
            .then((result) => {
                console.log(result.data.text);
            })
            .catch(err => console.log(`Erro: ${err}`));
    })