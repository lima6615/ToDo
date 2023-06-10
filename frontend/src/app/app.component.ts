import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../app/pages/public/login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const logado = !!this.loginService.getLogin();

    if(!logado) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/agendas']);
    }
  }






}
