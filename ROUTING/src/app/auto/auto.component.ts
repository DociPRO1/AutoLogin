import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../service/webservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  filter: string = '';
  auto: any = [];
  credentials: any = [];
  marche: string[] = [];

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

  data: any;
  uniqueBrands: any[] = [];


  constructor(public webserviceService: WebserviceService, private formBuilder: FormBuilder, private router: Router) {
  }

  async ngOnInit() {
    await this.webserviceService.getCarsSql('getCars');
    console.log(this.webserviceService.myCars);
    this.auto = this.webserviceService.myCars;
    this.credentials = this.webserviceService.loginData;
    this.extractUniqueBrands();


    if (this.credentials.successo !== 'ok') {
      this.router.navigate(['/login']);
    }
  }

  onSubmit() {
    if (this.carForm.valid) {
      console.log('Form Submitted!', this.carForm.value);

      this.webserviceService.addCar('addCar', this.carForm.value);
      this.carForm.reset();
    }
    else {

    }

  }
  getBrandCode(brand: string): string {
    const car = this.auto.find((c: any) => c.marca === brand);
    return car ? car.codMarca : '';
  }

  extractUniqueBrands() {
    this.auto.forEach((car: any) => {
      if (!this.marche.includes(car.marca)) {
        this.marche.push(car.marca);
      }
    });
  }

  buyCar(car: any) {
    this.webserviceService.vendiAuto('sellCar', { id: car.id, cid: this.credentials.id, prezzo: car.prezzo, data: new Date().toISOString().slice(0, 19).replace('T', ' ') });
  alert('Auto acquistata con successo!')
  }

  dettagli(car: any) {
    let carInfo = `Marca: ${car.marca}\nModello: ${car.nome}\nCilindrata: ${car.cilindrata}\nPrezzo: ${car.prezzo}\nAnno: ${car.anno}\nCodice Marca: ${car.codMarca}\nColore: ${car.colore}\nID: ${car.id}\nKilometri: ${car.km}\nNumero Porte: ${car.nPorte}\nTarga: ${car.targa}`;
    alert(carInfo);
  }
}