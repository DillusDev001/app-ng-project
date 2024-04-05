import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { ListaComponent } from './lista/lista.component';
import { MainComponent } from '../main/main.component';
import { MainModule } from '../main/main.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    MainModule,
    SharedModule
  ]
})
export class EmpresaModule { }
