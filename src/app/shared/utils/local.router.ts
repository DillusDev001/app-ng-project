import { Router } from "@angular/router";

// ================ MAIN ================ //
export function goMainInicio(router: Router) {
    router.navigate(['main/inicio']);
}

// ================ AUTH ================ //
export function goLogin(router: Router) {
    router.navigate(['auth/login']);
}

export function goRegister(router: Router) {
    router.navigate(['auth/register']);
}

export function goForGotPassword(router: Router) {
    router.navigate(['auth/forgot']);
}

// ================ EMPRESA ================ //
export function goEmpresaLista(router: Router) {
    router.navigate(['main/empresa/lista']);
}

// ================ ASPIRANTE ================ //
export function goAspiranteLista(router: Router) {
    router.navigate(['main/aspirante/lista']);
}










// ================ INDeX ================ //
export function goIndex(router: Router) {
    router.navigate(['auth/']);
}



export function goAdminDashBoard(router: Router) {
    router.navigate(['admin/home']);
}

// ================= HOME ================== //
export function goAdminHome(router: Router) {
    router.navigate(['admin/home']);
}

// ============== COTIZACION =============== //
export function goAdminCotizacionLaboratorio(router: Router) {
    router.navigate(['admin/cotizacion/laboratorio']);
}

export function goAdminCotizacionServicio(router: Router) {
    router.navigate(['admin/cotizacion/servicio']);
}

// =============== RECEPCION =============== //

// ================ PRUEBAS ================ //

// ================ GRAFICOS =============== //
export function goAdminGraficosGeneral(router: Router) {
    router.navigate(['admin/graficos']);
}

// =============== PARAMETRO =============== //

// =============== CLIENTES ================ //

// ================ USUARIO ================ //
export function goUsuarios(router: Router) {
    router.navigate(['admin/usuarios']);
}

// ================  ================ //

// ================  ================ //

// ================  ================ //