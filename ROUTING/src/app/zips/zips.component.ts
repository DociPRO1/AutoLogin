import {Component, OnInit} from '@angular/core';
import {WebserviceService} from "../service/webservice.service";

@Component({
  selector: 'zips',
  templateUrl: './zips.component.html',
  styleUrls: ['./zips.component.css']
})
export class ZipsComponent implements OnInit{

  constructor(public ajaxRequest: WebserviceService) {

  }

  ngOnInit() {
    this.ajaxRequest.getZips('getZips');

      }

  sendParam(){
    this.ajaxRequest.insertZips('Roma','Italia',1000000,'123456')


  }

}
