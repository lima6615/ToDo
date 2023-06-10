import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AgendaRoutingModule } from './agenda-routing.module';
import { MaterialAgendaModule } from './material.agenda.module'

import { AgendaIncluirComponent } from './incluir/agenda-incluir.component';
import { AgendaListarComponent } from './listar/agenda-listar.component';
import { AgendaService } from './service/agenda.service';


@NgModule({
  declarations: [
    AgendaIncluirComponent,
    AgendaListarComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    ReactiveFormsModule,
    MaterialAgendaModule
  ],
  providers: [
    AgendaService
  ]
})
export class AgendaModule {}
