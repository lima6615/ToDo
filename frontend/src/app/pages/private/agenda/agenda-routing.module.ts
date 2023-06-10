import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendaIncluirComponent } from './incluir/agenda-incluir.component';
import { AgendaListarComponent } from './listar/agenda-listar.component';

const routes: Routes = [
  { path: '', component: AgendaListarComponent },
  { path: 'incluir', component: AgendaIncluirComponent },
  { path: 'editar/:id', component: AgendaIncluirComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaRoutingModule {}
