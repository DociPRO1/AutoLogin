"option strict";
const http = require('http');
const url = require('url');
const fs = require('fs');
const mysql = require('mysql');


let server = http.createServer((richiesta, risposta) => {
    let indirizzoRichiesta =  url.parse(richiesta.url, true);
    let nomeRisorsa = indirizzoRichiesta.pathname;
    let param;
    let con;
    console.log(indirizzoRichiesta);
    console.log(nomeRisorsa);

    let header = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    };

    switch(nomeRisorsa) {
        case '/getZips':
            fs.readFile('zips.json', (err, file) => {
                if (err) throw err;
                risposta.writeHead(200, header);
                risposta.end(file);
            });
            break;

        case '/addZip':
            param = "";
            richiesta.on('data', (data) => {
                param += data;
            });
            richiesta.on('end', () => {
                postParam = JSON.parse(param);
                console.log("Città da inserire: " + postParam.c);

                fs.readFile('zips.json', (err, file) => {
                    if (!err) {
                        let id = getLastId(file);
                        console.log("Last id: " + id);
                        risposta.writeHead(200, header);
                        risposta.end(id.toString()); // Convert id to string
                    }
                });
            });
            break;

            case '/getUsersMySql':
                 con = mysql.createConnection({
                    host:"localhost",
                    user:"root",
                    password:"",
                    database:"automobili"
                });

                con.connect((err) => {
                    if (err){
                        risposta.end("Errore di connessione al database");

                    }else
                    {
                        console.log("Connected!");
                        con.query('SELECT * FROM utenti', (errQ, result) => {
                            if (errQ)
                            {
                                risposta.end("Errore di esecuzione della query Utenti");
                            }
                            else
                            {
                                risposta.writeHead(200, header);
                                risposta.end(JSON.stringify(result));
                            }

                        });
                    }
                    con.end();

                });
                break;
        case'/getCars':
            console.log("Richiesta ricevuta su /getAllCars");

            con = mysql.createConnection({
                host:"localhost",
                user:"root",
                password:"",
                database:"automobili"
            });

            con.connect((err) => {
                if (err){
                    console.log("Errore di connessione al database");
                    risposta.end("Errore di connessione al database");
                } else {
                    console.log("Connected!");
                    con.query('SELECT modelli.*, marche.nome AS marca FROM modelli JOIN marche ON modelli.codMarca = marche.id', (errQ, result) => {
                        if (errQ) {
                            console.log("Errore di esecuzione della query Modelli");
                            risposta.end("Errore di esecuzione della query Modelli");
                        } else {
                            console.log("Query eseguita con successo");
                            risposta.writeHead(200, header);
                            risposta.end(JSON.stringify(result));
                        }
                    });
                }
                con.end();
            });
            break;
        case '/addCar':
            console.log("Richiesta ricevuta su /addCar");
            param = "";
            richiesta.on('data', (data) => {
                param += data;
            });
            richiesta.on('end', () => {
                param = JSON.parse(param);
                console.log(param);
                con = mysql.createConnection({
                    host:"localhost",
                    user:"root",
                    password:"",
                    database:"automobili"
                });
                con.connect((err) => {
                    if (err){
                        console.log("Errore di connessione al database");
                        risposta.end("Errore di connessione al database");
                    } else {
                        console.log("Connected!");
                        con.query('INSERT INTO modelli (id, nome, codMarca, nPorte, cilindrata, colore, anno, prezzo, targa, km) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                            [param.id, param.nome, param.codMarca, param.nPorte, param.cilindrata, param.colore, param.anno, param.prezzo, param.targa, param.km],
                            (errQ, result) => {
                                if (errQ) {
                                    console.log("Errore di esecuzione della query Modelli");
                                    risposta.end("Errore di esecuzione della query Modelli");
                                } else {
                                    console.log("Query eseguita con successo");
                                    risposta.writeHead(200, header);
                                    risposta.end(JSON.stringify({ successo: 'ok' }));
                                }
                            });
                    }
                    con.end();
                });
            });
            break;

            case '/sellCar':
            console.log("Richiesta ricevuta su /sellCar");
            param = "";
                richiesta.on('data', (data) => {
                    param += data;
                });
                richiesta.on('end', () => {
                    param = JSON.parse(param);
                    con = mysql.createConnection({
                        host:"localhost",
                        user:"root",
                        password:"",
                        database:"automobili"
                    });
                    con.connect((err) => {
                        if (err){
                            console.log("Errore di connessione al database");
                            risposta.end("Errore di connessione al database");
                        } else {
                            console.log("Connected!");
                            con.query('INSERT INTO logvendite (idModello, idUtente, prezzo, data) VALUES (?, ?, ?, ?)', [param.id, param.cid, param.prezzo, param.data], (errQ, result) => {
                                if (errQ) {
                                    console.log("Errore di esecuzione della query Vendite");
                                    risposta.end("Errore di esecuzione della query Vendite");
                                } else {
                                    console.log("Query eseguita con successo");
                                    risposta.writeHead(200, header);
                                    risposta.end(JSON.stringify({ successo: 'ok' }));
                                }
                            });
                        }
                        con.end();
                    });
                });

                break;






        case('/verifyLogin'):
            console.log("Richiesta ricevuta su /verifyLogin");
            param = "";
            richiesta.on('data', (data) => {
                param += data;
            });
            richiesta.on('end', () => {
                postParam = JSON.parse(param);
                console.log("Data: " + postParam.e + " " + postParam.p);

                 con = mysql.createConnection({
                    host:"localhost",
                    user:"root",
                    password:"",
                    database:"automobili"
                });

                con.connect((err) => {
                    if (err){
                        console.log("Errore di connessione al database");
                        risposta.end("Errore di connessione al database");
                    }else {
                        console.log("Connected!");
                        con.query('SELECT * FROM utenti WHERE mail = ? AND pwd = ?', [postParam.e, postParam.p], (errQ, result) => {
                            if (errQ) {
                                console.log("Errore di esecuzione della query Utenti");
                                risposta.end("Errore di esecuzione della query Utenti");
                            } else {
                                console.log("Query eseguita con successo");
                                if (result.length > 0) {
                                    let response = {
                                        successo: 'ok',
                                        id: result[0].id,
                                        admin: result[0].admin
                                    };
                                    risposta.writeHead(200, header);
                                    risposta.end(JSON.stringify(response));
                                } else {
                                    risposta.writeHead(200, header);
                                    risposta.end(JSON.stringify({ successo: 'no' }));
                                }
                            }
                        });
                    }
                    con.end();
                });
            });
            break;



    }
});

server.listen(8888);
console.log('Server avviato sulla porta 8888...');

function getLastId(file) {
    let zips = JSON.parse(file);
    return zips[zips.length - 1]._id + 1;
}