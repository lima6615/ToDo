import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: '', pathMatch: 'full', redirectTo: 'login'},
  {
    path: 'login',
    loadChildren: () => import('./pages/public/login/login.module').then(m => m.LoginModule)
  },
  { path: 'agendas',
    loadChildren: () => import('./pages/private/agenda/agenda.module').then(m => m.AgendaModule)
  },
  { path: 'usuarios',
    loadChildren: () => import('./pages/private/usuario/usuario.module').then(m => m.UsuarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
