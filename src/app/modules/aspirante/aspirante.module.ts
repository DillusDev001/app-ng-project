import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AspiranteRoutingModule } from './aspirante-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AspiranteListaComponent } from './aspirante-lista/aspirante-lista.component';


@NgModule({
  declarations: [

  
    AspiranteListaComponent
  ],
  imports: [
    CommonModule,
    AspiranteRoutingModule,
    SharedModule,


    ReactiveFormsModule,
    FormsModule
  ]
})
export class AspiranteModule { }
