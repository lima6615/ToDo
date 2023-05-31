import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaListComponent } from './shared/components/agenda-list/agenda-list.component';
import { AgendaFormComponent } from './pages/agenda-form/agenda-form.component';
import { AgendaComponent } from './pages/agenda/agenda.component';


@NgModule({
  declarations: [
    AgendaComponent,
    AgendaFormComponent,
    AgendaListComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
})
export class AgendaModule {}
