import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit{
  private url: string = 'http://localhost:8888/';
  data: any;
  async ngOnInit(){
    await fetch(this.url)
      .then(response => response.json())  // restituisce un parametro json che sono i dati ottenuti dal ws
      .then(json => {this.data=json;
        console.log(this.data);
      })
      .catch(err => console.log('Request Failed', err));
  }
}
