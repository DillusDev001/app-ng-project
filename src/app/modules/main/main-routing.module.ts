import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'empresa', loadChildren: () => import('./../empresa/empresa.module').then(m => m.EmpresaModule) },
      { path: 'aspirante', loadChildren: () => import('./../aspirante/aspirante.module').then(m => m.AspiranteModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
