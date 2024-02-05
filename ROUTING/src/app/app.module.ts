import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AutoComponent } from './auto/auto.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ApiDataComponent } from './api-data/api-data.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ZipsComponent } from './zips/zips.component';
import { MysqlComponent } from './mysql/mysql.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutoComponent,
    PagenotfoundComponent,
    ApiDataComponent,
    ZipsComponent,
    MysqlComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
