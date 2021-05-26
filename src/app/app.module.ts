import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SolicitudImportComponent } from './solicitud-import/solicitud-import.component';
import { FormsModule } from '@angular/forms';
import { PresupuestoLimAsigComponent } from './solicitud-import/presupuesto-lim-asig/presupuesto-lim-asig.component';
import { DictamenTecnComponent } from './dictamen-tecn/dictamen-tecn.component';
import { AnalisisOfertaComponent } from './dictamen-tecn/analisis-oferta/analisis-oferta.component';
import { TraspasoComponent } from './traspaso/traspaso.component';
import { SolicitudMaterialesComponent } from './solicitud-materiales/solicitud-materiales.component';
import { TablaProductoTComponent } from './traspaso/tabla-producto-t/tabla-producto-t.component';
import { TemporalComponent } from './temporal/temporal.component';
import { TablaProductoMComponent } from './solicitud-materiales/tabla-producto-m/tabla-producto-m.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CarouselComponent } from './carousel/carousel.component';
import { DescripcionEmpresaComponent } from './descripcion-empresa/descripcion-empresa.component';
import { NegociacionesComponent } from './negociaciones/negociaciones.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SolicitudImportComponent,
    PresupuestoLimAsigComponent,
    DictamenTecnComponent,
    AnalisisOfertaComponent,
    TraspasoComponent,
    SolicitudMaterialesComponent,
    TablaProductoTComponent,
    TemporalComponent,
    TablaProductoMComponent,
    SidebarComponent,
    NavbarComponent,
    CarouselComponent,
    DescripcionEmpresaComponent,
    NegociacionesComponent,
    NoticiasComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
