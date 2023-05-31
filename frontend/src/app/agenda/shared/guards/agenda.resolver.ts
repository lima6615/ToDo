import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AgendaService } from '../../service/agenda.service';
import { Agenda } from '../model/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaResolver implements Resolve<Agenda> {

  constructor(private service : AgendaService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Agenda> {
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }
    return of({id: '', titulo: '', data: ''});
  }
}
