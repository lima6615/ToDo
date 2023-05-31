import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Agenda } from '../../model/agenda';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.scss']
})
export class AgendaListComponent {

  @Input() agendas: Agenda[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ['titulo', 'data', 'actions'];

  constructor(){
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(agenda: Agenda){
    this.edit.emit(agenda);
  }

  onDelete(agenda: Agenda){
    this.delete.emit(agenda);
  }
}
