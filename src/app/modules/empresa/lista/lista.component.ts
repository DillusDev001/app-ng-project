import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { arrayCiudad, arrayCodeCountries, arrayRol } from 'src/app/shared/utils/local.array';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  constructor(){
    this.formLogin.controls.email.disable();
  }
  dataCiudad = arrayRol;


  formLogin = new FormGroup({
    email: new FormControl('Administrador', [Validators.required, Validators.email]),
  });

  metdo(){
    this.formLogin.controls.email.disable();
  }


}
