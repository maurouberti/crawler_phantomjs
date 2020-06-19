const Tesseract = require('tesseract.js');
const filename = './exemplo3/image.png';
Tesseract
    .recognize(filename)
    // .progress((p) => {
    //     console.log(`progresso: ${p}`);
    // })
    .then((result) => {
        // console.log(result);
        console.log(result.data.text);
    })
    .catch(err => console.log(`Erro: ${err}`));