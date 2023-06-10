import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AgendaService } from '../service/agenda.service';
import { AgendaModel } from '../models/agenda.model';


@Component({
  selector: 'app-agenda-listar',
  templateUrl: './agenda-listar.component.html',
  styleUrls: ['./agenda-listar.component.scss']
})
export class AgendaListarComponent {

  agendas!: AgendaModel[];

  readonly displayedColumns = ['titulo', 'data', 'horario', 'actions'];

  constructor(
    private service: AgendaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {
   this.refresh();
  }

  onAdd() {
    this.router.navigate(['/agendas/incluir'], {relativeTo: this.activatedRoute});
  }

  onEdit(agenda: AgendaModel){
    this.router.navigate(['/agendas/editar', agenda.id], {relativeTo: this.activatedRoute});
  }

  refresh(){
    this.service.list().subscribe(lista => {
      console.log(lista);
      this.agendas = lista
    });
  }

  onDelete(agenda : AgendaModel){
    this.service.delete(agenda.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Agenda removido sucesso!', '',{duration: 5000, verticalPosition: 'top',horizontalPosition: 'right'});
      }
    );
  }
}
