import { Component } from '@angular/core';
import {WebserviceService} from "../service/webservice.service";

@Component({
  selector: 'api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent {

  constructor(public ajaxRequest: WebserviceService) {
  }
numUser = 0;
visualizzaDati = false;

  getData() {
    this.ajaxRequest.getUsers(this.numUser);
    this.visualizzaDati = true;

  }

  visData() {
    console.log(this.ajaxRequest.serverData);

  }
}
