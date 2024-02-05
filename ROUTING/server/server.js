"option strict";
const http = require('http');
const url = require('url');
const fs = require('fs');
const mysql = require('mysql');


let server = http.createServer((richiesta, risposta) => {
    let indirizzoRichiesta =  url.parse(richiesta.url, true);
    let nomeRisorsa = indirizzoRichiesta.pathname;
    let param;
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
                let con = mysql.createConnection({
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

        case('/verifyLogin'):
            console.log("Richiesta ricevuta su /verifyLogin"); // Aggiungi questo log
            param = "";
            richiesta.on('data', (data) => {
                param += data;
            });
            richiesta.on('end', () => {
                postParam = JSON.parse(param);
                console.log("Data: " + postParam.e + " " + postParam.p);

                let con = mysql.createConnection({
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
                                risposta.writeHead(200, header);
                                risposta.end(JSON.stringify(result));
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