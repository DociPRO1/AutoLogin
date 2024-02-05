import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AutoComponent} from "./auto/auto.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {ApiDataComponent} from "./api-data/api-data.component";
import {ZipsComponent} from "./zips/zips.component";
import {MysqlComponent} from "./mysql/mysql.component";

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'auto',component: AutoComponent},
  {path:'register', redirectTo:'/login'},
  {path:'apiweb', component:ApiDataComponent},
  {path:'zips', component: ZipsComponent},
  {path:'mysql', component: MysqlComponent},
  {path:'**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
