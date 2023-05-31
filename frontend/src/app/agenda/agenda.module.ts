import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { AgendaFormComponent } from './containers/agenda-form/agenda-form.component';
import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { AgendaComponent } from './containers/agenda/agenda.component';
import { AtividadeListComponent } from './containers/atividade-list/atividade-list.component';



@NgModule({
  declarations: [
    AgendaComponent,
    AgendaFormComponent,
    AgendaListComponent,
    AtividadeListComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
})
export class AgendaModule {}
