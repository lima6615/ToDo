import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { MaterialUsuarioModule } from './material.usuario.module';
import { UsuarioComponent } from './usuario.component';

@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MaterialUsuarioModule
  ],
  providers: [
  ]
})
export class UsuarioModule { }
