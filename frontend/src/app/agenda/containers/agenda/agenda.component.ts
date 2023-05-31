import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Agenda } from '../../model/agenda';
import { AgendaService } from '../../service/agenda.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent {
  agendas$: Observable<Agenda[]> | null = null;

  @Input()
  data: string = '';

  @Output()
  teste = new EventEmitter<string>();

  constructor(
    private service: AgendaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {
   this.refresh();
   this.teste.emit('cheguei aqui!');
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

  onEdit(agenda: Agenda){
    this.router.navigate(['edit', agenda.id], {relativeTo: this.activatedRoute});
  }

  refresh(){
    this.agendas$ = this.service.list();
  }

  onDelete(agenda : Agenda){
    this.service.delete(agenda.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Agenda removido sucesso!', '',{duration: 5000, verticalPosition: 'top',horizontalPosition: 'right'});
      }
    );
  }
}
