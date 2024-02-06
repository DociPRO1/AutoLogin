import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../service/webservice.service';

@Component({
  selector: 'auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit{
  private url: string = 'http://localhost:8888/';

  data: any;

    constructor(public webserviceService: WebserviceService) {
    }
  async ngOnInit(){
    await this.webserviceService.getCarsSql('getCars');
    console.log(this.webserviceService.myCars);
  }
}
