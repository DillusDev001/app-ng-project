import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMenuButtonComponent } from './custom-menu-button/custom-menu-button.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomIconComponent } from './custom-icon/custom-icon.component';
import { CustomAnuncioCardComponent } from './custom-anuncio-card/custom-anuncio-card.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomDropBoxComponent } from './custom-drop-box/custom-drop-box.component';
import { CustomEmpresaCardComponent } from './custom-empresa-card/custom-empresa-card.component';

@NgModule({
  declarations: [
    CustomMenuButtonComponent,
    CustomButtonComponent,
    CustomIconComponent,
    CustomAnuncioCardComponent,
    CustomInputComponent,
    CustomDropBoxComponent,
    CustomEmpresaCardComponent,
  ],
  exports: [
    CustomMenuButtonComponent,
    CustomButtonComponent,
    CustomIconComponent,
    CustomAnuncioCardComponent,
    CustomInputComponent,
    CustomDropBoxComponent,

    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
