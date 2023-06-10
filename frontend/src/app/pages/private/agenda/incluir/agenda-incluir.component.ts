import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AgendaService } from '../service/agenda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaModel } from '../models/agenda.model';
import { DefaultError } from '../../../shared/models/errors.model';



export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'app-agenda-incluir',
  templateUrl: './agenda-incluir.component.html',
  styleUrls: ['./agenda-incluir.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class AgendaIncluirComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AgendaService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: ActivatedRoute,
    private route: Router
  ){
    this.form = this.formBuilder.group({
      id: [''],
      titulo: ['', [Validators.required]],
      data: ['',   [Validators.required]],
      horario: ['', [Validators.required]],
      local: ['',   [Validators.required]],
      descricao: ['', [Validators.required]],
      concluido: [false, [Validators.required]]
    });

    const agenda : AgendaModel = this.router.snapshot.data['agenda']
    console.log(agenda)
    if(!!agenda){
      this.form.setValue({
        id: agenda.id,
        descricao: agenda.descricao,
        horario: agenda.horario,
        local: agenda.local,
        titulo: agenda.titulo,
        data: agenda.data,
        concluido: agenda.concluido
      })
    }
  }

  teste(event: string){
    console.log(event)
  }

 onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => {
        this.snackBar.open(`Agenda ${result.id} salvo com sucesso!`, '',{duration: 5000, verticalPosition: 'top',horizontalPosition: 'right'});
        this.route.navigate(['/agendas'])
    },
     (erro : DefaultError) => {
        console.log(JSON.stringify(erro));
        this.snackBar.open(`${erro.error.message}`, '',{duration: 5000, verticalPosition: 'top',horizontalPosition: 'right'});
     });
  }

  onVoltar(){
    this.location.back();
  }
}
