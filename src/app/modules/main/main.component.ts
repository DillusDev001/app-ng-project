import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Anuncio } from 'src/app/shared/interfaces/app/anuncio';
import { Empresa } from 'src/app/shared/interfaces/app/empresa';
import { Usuario } from 'src/app/shared/interfaces/app/usuario';
import { DataLocalStorage } from 'src/app/shared/interfaces/local/data-local-storage';
import { ArrayAnuncios } from 'src/app/shared/utils/examples/anuncio.array';
import { goAdminHome, goIndex, goLogin, goMainInicio } from 'src/app/shared/utils/local.router';
import { deleteLocalStorageData, getLocalDataLogged, localStorageLogOut } from 'src/app/shared/utils/local.storage';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  /** ---------------------------------- Variables de Inicio ---------------------------------- **/
  // ================ INICIO ================ //
  // Data Local Storeage - Variable
  dataLocalStorage: DataLocalStorage = {
    usuario: null,
    empresa: null,
    loggedDate: ''
  }

  // Usuario logeado
  usuarioLogeado!: Usuario;

  // Empresa logeado
  empresaLogeado!: Empresa;

  // loading spinner
  isLoading: boolean = true;

  // Info Alert
  alertInfo: boolean = false;

  // Confirmacion Alert
  alertConfirmacion: boolean = false;

  // Error Alert
  alertError: boolean = false;

  // Mensaje Alert
  msgAlert: string = '';

  // ================  ================ //
  // SideBar
  open: boolean = false;

  menuSelected: string = 'Inicio';
  subMenuSelected: string = '';

  title: string = this.menuSelected;


  /** -------------------------------------- Constructor -------------------------------------- **/
  constructor(
    private router: Router
  ) {
    if (getLocalDataLogged() != null) {
      this.dataLocalStorage = getLocalDataLogged();
      if (this.dataLocalStorage.usuario != null) {
        this.usuarioLogeado = this.dataLocalStorage.usuario;
      } else if (this.dataLocalStorage.empresa != null) {
        this.empresaLogeado = this.dataLocalStorage.empresa;
      } else {
        deleteLocalStorageData();
        goLogin(this.router);
      }
    } else {
      deleteLocalStorageData();
      goLogin(this.router);
    }

    goMainInicio(router);
  }

  /** ---------------------------------------- OnInit ----------------------------------------- **/
  ngOnInit(): void {
    initFlowbite();
  }

  /** ---------------------------------------- Methods ---------------------------------------- **/

  /** ------------------------------------ Methods onClick ------------------------------------ **/
  onClickMenuButton(){
    
  }

  /** ----------------------------------- Consultas Sevidor ----------------------------------- **/

  /** ---------------------------------- Onclick file import ---------------------------------- **/

  /** ---------------------------------------- Receiver --------------------------------------- **/

  /** --------------------------------------- ShowAlerts -------------------------------------- **/
  onShowConfirmacion(sw: boolean) {
    this.alertConfirmacion = sw;
    //this.open = false; // Close Menú Lateral
  }

  onShowInfo() {
    this.alertInfo = true;
    //this.open = false; // Close Menú Lateral
    setTimeout(() => {
      this.alertInfo = false;
    }, 1000);
  }

  onShowError(sw: boolean) {
    this.alertError = sw;
    //this.open = false; // Close Menú Lateral
  }

  listenAlertConfirmation(event: boolean) {
    this.alertConfirmacion = false;
    if (event) {
      this.msgAlert = 'Se ha eliminado correctamente!!!';
      this.onShowInfo();
    } else {
      this.msgAlert = 'Acción cancelada';
      this.alertError = true;
    }
  }

  listenAlertError(event: boolean) {
    if (event) this.alertError = false;
  }
}
