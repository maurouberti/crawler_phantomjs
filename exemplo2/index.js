'use strict';

const Hapi = require('hapi');
const Horseman = require('node-horseman');
const mongoose = require('mongoose');

const server = new Hapi.Server();
server.connection({ port: 3000 });
const db = mongoose.connect('mongodb://localhost/crawler', { useNewUrlParser: true, useUnifiedTopology: true }).connection;
const Fundamentus = require('./fundamentus');

// db.on('error', (err) => {
//     console.log(`Mongoose erro: ${err}`);
// });


server.route({
    method: 'GET',
    path: '/fundamentus',
    handler: (req, reply) => {
        const papel = 'VVAR3';
        const data = '18/06/2020';
        console.time();
        Fundamentus.findOne({
            papel: papel,
            data: data
        }, (err, rows) => {
            if (!err && rows) {
                console.log('BD');
                console.timeEnd();
                return reply({
                    data: rows,
                    count: rows.length
                });
            }

            if (!err && !rows) {
                const horseman = new Horseman();
                horseman
                    .open(`http://www.fundamentus.com.br/detalhes.php?papel=${papel}`)
                    .evaluate(function() {
                        $ = window.$ || window.JQuery;
                        var values = [];
                        var skeleton = {
                            label: '',
                            data: ''
                        };
                        const labels = $('td.label');
                        const datas = $('td.data');
                        labels.each(function(index) {
                            skeleton.label = labels[index] ? labels[index].innerText : '';
                            skeleton.data = datas[index] ? datas[index].innerText : '';
                            values.push(skeleton);
                            skeleton = {
                                label: '',
                                data: ''
                            };
                        });
                        return values;
                    })
                    .then(function(res) {
                        const query = require('./formatar')(res);
                        const filter = { papel: query.papel };
                        const { papel, ...update } = query;
                        const options = {upsert: true, new: true, setDefaultsOnInsert: true};
                        Fundamentus.updateOne(filter, update, options, (err, results) => {
                            if (err) {
                                console.log(`Não incluiu: ${err}`);
                                console.timeEnd();
                                return reply(`Não incluiu: ${err}`);
                            }
                            console.log('Crawler');
                            console.timeEnd();
                            return reply(results);
                        });
                    })
                    .catch(function(err) {
                        console.log(`:( ${err} :(`);
                        console.timeEnd();
                        reply(`:( ${err} :(`);
                    })
                    .close();
            }
        });
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server hapi: ${server.info.uri}`);
});



// module.exports = horseman
