import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AgendaModel } from '../models/agenda.model';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable()
export class AgendaService {

  constructor(private http: HttpClient) {}

  list(): Observable<AgendaModel[]> {
    return this.http.get<AgendaModel[]>(API + '/agendas').pipe(take(1));
  }

  loadById(id: string){
    return this.http.get<AgendaModel>(API + '/agendas/' + id)
  }

  save(record: AgendaModel){
    console.log(record);
    if(record.id){
      return this.update(record);
    }
     return this.create(record);
  }

  private create(record: AgendaModel): Observable<AgendaModel>{
    return this.http.post<AgendaModel>(API + '/agendas', record);
  }

  private update(record : AgendaModel){
    return this.http.put<AgendaModel>(API + '/agendas/' + record.id, record ).pipe(take(1));
  }

  delete(id: number){
    return this.http.delete(API + '/agendas/' + id ).pipe(take(1));
  }
}
