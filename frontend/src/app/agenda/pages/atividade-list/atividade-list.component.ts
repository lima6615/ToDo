import { Component, EventEmitter } from '@angular/core';
import  { atividadesMock, Atividade } from '../../shared/model/atividade';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-atividade-list',
  templateUrl: './atividade-list.component.html',
  styleUrls: ['./atividade-list.component.scss']
})
export class AtividadeListComponent {

  dataSource!: MatTableDataSource<Atividade>;
  add = new EventEmitter(false);

  displayedColumns = ['descricao', 'horario', 'local', 'actions'];

  constructor(){
    this.dataSource.data = atividadesMock;
  }

  onAdd() {
    this.add.emit(true);
  }

  onDelete(){

  }
}
