import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendaComponent } from './pages/agenda/agenda.component';
import { AgendaFormComponent } from './pages/agenda-form/agenda-form.component';
import { AgendaResolver } from './shared/guards/agenda.resolver';

const routes: Routes = [
  { path: '', component: AgendaComponent },
  { path: 'new', component: AgendaFormComponent, resolve: {agenda : AgendaResolver}},
  { path: 'edit/:id', component: AgendaFormComponent, resolve: {agenda : AgendaResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaRoutingModule {}
