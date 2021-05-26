import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DictamenTecnComponent } from './dictamen-tecn/dictamen-tecn.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SolicitudImportComponent } from './solicitud-import/solicitud-import.component';
import { SolicitudMaterialesComponent } from './solicitud-materiales/solicitud-materiales.component';
import { TemporalComponent } from './temporal/temporal.component';
import { TraspasoComponent } from './traspaso/traspaso.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'sol_importacion',component:SolicitudImportComponent},
  {path:'dictamenTecn',component:DictamenTecnComponent},
  {path:'traspaso',component:TraspasoComponent},
  {path:'sol_materiales',component:SolicitudMaterialesComponent},
  {path:'temporal',component:TemporalComponent},
  {path:'',component:NavbarComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
