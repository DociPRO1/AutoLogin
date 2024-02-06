import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private httpClient: HttpClient) {
  }

  private URL_SERVICE = 'https://randomuser.me/api/?results=';
  private URL_SERVICE_ZIPS = 'http://localhost:8888/';

  public sendGetRequest(endPoint: number) {
    console.log(this.URL_SERVICE + endPoint);
    return this.httpClient.get(this.URL_SERVICE + endPoint);
  }

  public sendGetRequestZips(endPoint: string) {
    console.log(this.URL_SERVICE_ZIPS + endPoint);
    return this.httpClient.get(this.URL_SERVICE_ZIPS + endPoint);
  }

  public sendPostRequestZips(endPoint: string, par: any) {
let options = {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
return this.httpClient.post(this.URL_SERVICE_ZIPS + endPoint, par, options);
  }

  public getCars(endPoint: string) {
    console.log(this.URL_SERVICE_ZIPS + endPoint);
    return this.httpClient.get(this.URL_SERVICE_ZIPS + endPoint);
  }

  public sendVerifyLogin(endPoint: string, par: any) {
    let options = {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
    return this.httpClient.post(this.URL_SERVICE_ZIPS + endPoint, par, options)  }

  public sellCar(endPoint: string, par: any) {
    let options = {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
    return this.httpClient.post(this.URL_SERVICE_ZIPS + endPoint, par, options);
  }
  public addCar(endPoint: string, par: any) {
    let options = {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
    return this.httpClient.post(this.URL_SERVICE_ZIPS + endPoint, par, options);
  }

}
