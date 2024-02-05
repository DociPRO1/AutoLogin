import { Component,OnInit } from '@angular/core';
import {WebserviceService} from "../service/webservice.service";

@Component({
  selector: 'mysql',
  templateUrl: './mysql.component.html',
  styleUrls: ['./mysql.component.css']
})
export class MysqlComponent implements OnInit{

  constructor(public websService:WebserviceService) { }
  ngOnInit() {
    this.websService.getUtentiMySql('getUsersMySql');

  }
}
