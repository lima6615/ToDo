import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Agenda } from '../model/agenda';
import { Observable, first, take } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private readonly API = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Agenda[]>(this.API + '/agendas')
    .pipe(
      take(1),
    );
  }

  loadById(id: string){
    return this.http.get<Agenda>(this.API + '/agendas/' + id)
  }

  save(record: Agenda){
    console.log(record);
    if(record.id){
      return this.update(record);
    }
     return this.create(record);
  }

  private create(record: Agenda): Observable<Agenda>{
    return this.http.post<Agenda>(this.API + '/agendas', record);
  }

  private update(record : Agenda){
    return this.http.put<Agenda>(this.API + '/agendas/' + record.id, record ).pipe(take(1));
  }

  delete(id: string){
    return this.http.delete(this.API + '/agendas/' + id ).pipe(take(1));
  }
}
