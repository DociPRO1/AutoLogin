import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../service/webservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  carForm: FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    nome: ['', Validators.required],
    codMarca: ['', Validators.required],
    nPorte: ['', Validators.required],
    cilindrata: ['', Validators.required],
    colore: ['', Validators.required],
    anno: ['', Validators.required],
    prezzo: ['', Validators.required],
    targa: ['', Validators.required],
    km: ['', Validators.required]
  });

  private url: string = 'http://localhost:8888/';
  auto: any = [];
  credentials: any = [];
  marche: string[] = [];

  data: any;

  constructor(public webserviceService: WebserviceService, private formBuilder: FormBuilder) {
  }

  async ngOnInit() {
    await this.webserviceService.getCarsSql('getCars');
    console.log(this.webserviceService.myCars);
    this.auto = this.webserviceService.myCars;
    this.credentials = this.webserviceService.loginData;

    this.marche = Array.from(new Set(this.auto.map((car: any) => car.marca)));
  }

  onSubmit() {
    if (this.carForm.valid) {
        console.log('Form Submitted!', this.carForm.value);
        this.webserviceService.addCar('addCar', this.carForm.value);
    }
  }

  buyCar(car: any) {
    this.webserviceService.vendiAuto('sellCar', { id: car.id, cid: this.credentials.id, prezzo: car.prezzo, data: new Date().toISOString().slice(0, 19).replace('T', ' ') });
  }
}
