import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { Seccion1Component } from './components/seccion1/seccion1.component';
import { Seccion2Component } from './components/seccion2/seccion2.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Seccion3Component } from './components/seccion3/seccion3.component';
import { Seccion4Component } from './components/seccion4/seccion4.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    Seccion1Component,
    Seccion2Component,
    InicioComponent,
    Seccion3Component,
    Seccion4Component
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports:[
    FooterComponent
  ]
})
export class MainModule { }
