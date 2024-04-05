import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { goEmpresaLista, goLogin, goMainInicio } from 'src/app/shared/utils/local.router';
import { localStorageLogOut } from 'src/app/shared/utils/local.storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /** ---------------------------------- Variables de Inicio ---------------------------------- **/
  // ================  ================ //
  // SideBar
  open: boolean = false;

  menuSelected: string = 'Inicio';
  subMenuSelected: string = '';

  title: string = this.menuSelected;


  /** -------------------------------------- Constructor -------------------------------------- **/
  constructor(private router: Router) { }

  /** ---------------------------------------- OnInit ----------------------------------------- **/
  ngOnInit(): void {
    initFlowbite();
  }

  /** ---------------------------------------- Methods ---------------------------------------- **/

  /** ------------------------------------ Methods onClick ------------------------------------ **/
  onClickSideBar(sw: boolean) {
    this.open = sw;
  }

  onClickSetMenuSelected(event: string) {
    this.menuSelected = event;
    this.subMenuSelected = '';
    this.title = event;

    switch (event) {
      case 'Inicio':
        goMainInicio(this.router);
        break;

      case 'Empresas': goEmpresaLista(this.router); break;
    }

    this.open = false;
  }

  onClickSetSubMenuSelected(m: string, sm: string) {
    this.subMenuSelected = sm;
    this.menuSelected = m;

    this.title = sm;

    switch (sm) {
      // Inicio
      case 'Cotización': //goAdminCotizacionLaboratorio(this.router); break;

      case 'Recepción': break;

      case 'Pruebas': break;

      case 'Gráficos': break;

      // Mantenimiento
      case 'Parámetro': break;

      case 'Clientes': break;

      case 'Usuarios': break;
    }

    this.open = false;
  }

  onClickLogin() { goLogin(this.router); }

  onClickLogOut() {
    if (localStorageLogOut()) {
      //goIndex(this.router);
    }
  }

  /** ----------------------------------- Consultas Sevidor ----------------------------------- **/

  /** ---------------------------------- Onclick file import ---------------------------------- **/

  /** ---------------------------------------- Receiver --------------------------------------- **/
}
