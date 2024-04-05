import { Component, Input, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Anuncio } from 'src/app/shared/interfaces/app/anuncio';

@Component({
  selector: 'app-custom-anuncio-card',
  templateUrl: './custom-anuncio-card.component.html',
  styleUrls: ['./custom-anuncio-card.component.css']
})
export class CustomAnuncioCardComponent implements OnInit {
  /** ---------------------------------- Variables de Inicio ---------------------------------- **/
  @Input() anuncio!: Anuncio;
  @Input() class!: string;

  classMain: string = 'bg-white';
  classTitle: string = 'text-primary-950';
  classUbicacionDiv: string = 'bg-gray-100';
  classUbicacionP: string = 'text-primary-950';
  classDescripcion: string = 'text-primary-950';
  classModalidadIcon: string = 'text-primary-950';
  classModalidadP: string = 'text-primary-950';
  classAction: string = 'border border-primary-950 bg-white';
  classActionP: string = 'text-primary-950';

  publicado: string = 'Hace 5 días.';
  /** -------------------------------------- Constructor -------------------------------------- **/
  constructor() {

  }

  /** ---------------------------------------- OnInit ----------------------------------------- **/
  ngOnInit(): void { initFlowbite(); }

  /** ---------------------------------------- Methods ---------------------------------------- **/
  mouseHover() { 
    this.classMain = 'bg-primary-500';
    this.classTitle = 'text-white';
    this.classUbicacionDiv = 'bg-primary-400';
    this.classUbicacionP = 'text-white';
    this.classDescripcion = 'text-white';
    this.classModalidadIcon = 'text-white';
    this.classModalidadP = 'text-sm text-white';
    this.classAction = 'bg-orange-500';
    this.classActionP = 'text-white';
  }

  mouseLeave() {
    this.classMain = 'bg-white';
    this.classTitle = 'text-primary-950';
    this.classUbicacionDiv = 'bg-gray-100';
    this.classUbicacionP = 'text-primary-950';
    this.classDescripcion = 'text-primary-950';
    this.classModalidadIcon = 'text-primary-950';
    this.classModalidadP = 'text-sm text-primary-950';
    this.classAction = 'border border-primary-950 bg-white';
    this.classActionP ='text-primary-950';
  }

  /** ------------------------------------ Methods onClick ------------------------------------ **/

  /** ----------------------------------- Consultas Sevidor ----------------------------------- **/

  /** ---------------------------------- Onclick file import ---------------------------------- **/

  /** ---------------------------------------- Receiver --------------------------------------- **/

  /** --------------------------------------- ShowAlerts -------------------------------------- **/
}
