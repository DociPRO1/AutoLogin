import { Injectable } from '@angular/core';
import {ConnectionService} from "./connection.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

    constructor(private connectionService: ConnectionService, private router: Router) {
    }

    serverData: any = [];
    dataZips: any = [];
    mySqlUsers: any = [];
    myCars: any = [];

    getUsers(numUsers: number) {
        this.connectionService.sendGetRequest(numUsers).subscribe(
            (data: any) => {//equivalente a .done di ajax
                console.log(data.results);
                this.serverData = data.results;
            },
            (error: any) => {//equivalente a .fail di ajax
                console.log("Errore Get Server Data")
                console.log(error)
            }
        )
    }

    getZips(endPoint: string) {
        this.connectionService.sendGetRequestZips(endPoint).subscribe(
            (data: any) => {//equivalente a .done di ajax
                console.log(data);
                this.dataZips = data;
            },
            (error: any) => {//equivalente a .fail di ajax
                console.log("Errore Get Server Data")
                console.log(error)
            }
        )
    }

    insertZips(citta: string, stato: string, pop: number, id: string) {
        let par = {
            c: citta,
            s: stato,
            p: pop,
            id: id
        }
        this.connectionService.sendPostRequestZips('addZip', par).subscribe(
            (data: any) => {

                console.log("Id ricevuto dal server:" + data);
                console.log(data);
            },
            (error: any) => {
                console.log("Errore esecuzione web service post")
                console.log(error)
            }
        )

    }

    getUtentiMySql(endPoint: string) {
        this.connectionService.sendGetRequestZips(endPoint).subscribe(
            (data: any) => {//equivalente a .done di ajax
                console.log(data);
                this.mySqlUsers = data;
            },
            (error: any) => {//equivalente a .fail di ajax
                console.log("Errore Get Server Data")
                console.log(error)
            }
        )

    }

    async getCarsSql(endPoint: string) {
        await new Promise((resolve,reject) =>
            this.connectionService.getCars(endPoint).subscribe(
                (data: any) => {
                    console.log(data);
                    this.myCars = data;
                    resolve(data);
                },
                (error: any) => {
                    console.log("Errore Get Server Data")
                    console.log(error)
                    reject(error);
                }

            )
        )




    }

    loginData : any = [];
    verifyLogin(email: string, password: string) {

        let par = {
            e: email,
            p: password
        }
        this.connectionService.sendVerifyLogin('verifyLogin', par).subscribe(
            (data: any) => {
                console.log(data);
                if (data.successo == 'ok')
                {
                    this.router.navigate(['/auto']);

                }
                else {
                    alert("Errore Login")
                }
            },
            (error: any) => {
                console.log("Errore esecuzione web service post")
                console.log(error)
            }
        )
    }
}