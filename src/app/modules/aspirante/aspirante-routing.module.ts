import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AspiranteListaComponent } from './aspirante-lista/aspirante-lista.component';

const routes: Routes = [
  {path: 'lista', component: AspiranteListaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspiranteRoutingModule { }
