import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { arrayCiudad } from 'src/app/shared/utils/local.array';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  /** ---------------------------------- Variables de Inicio ---------------------------------- **/
  // ================  ================ //
  formBusqueda = new FormGroup({
    value: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  dataCiudad = arrayCiudad; 


  /** -------------------------------------- Constructor -------------------------------------- **/
  constructor(private router: Router) { }

  /** ---------------------------------------- OnInit ----------------------------------------- **/
  ngOnInit(): void {
    initFlowbite();
  }

  /** ---------------------------------------- Methods ---------------------------------------- **/

  /** ------------------------------------ Methods onClick ------------------------------------ **/

  /** ----------------------------------- Consultas Sevidor ----------------------------------- **/

  /** ---------------------------------- Onclick file import ---------------------------------- **/

  /** ---------------------------------------- Receiver --------------------------------------- **/

  /** --------------------------------------- ShowAlerts -------------------------------------- **/
}
