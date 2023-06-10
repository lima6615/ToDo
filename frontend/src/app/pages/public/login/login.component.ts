import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ILogin } from './models/login-models';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin!: FormGroup;

  constructor(
		private formBuilder: FormBuilder,
		private loginService: LoginService,
	) { }


  ngOnInit(): void {
		this.formLogin = this.formBuilder.group({
			email: [ '', [Validators.required, Validators.email] ],
			password: [ '', [Validators.required, Validators.minLength(6), Validators.maxLength(10)] ],
			isSavePassword: [false]
		})
  }


	onSubmit() {
		const { email, password } = this.formLogin.value;
		const login: ILogin = { email, password }

		this.loginService.login(login).subscribe(result  => {
			if(!!result.email) {
				this.loginService.setLogin(result);
			}
		});
	}
}
