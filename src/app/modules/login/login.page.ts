import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/core/services/login.model';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  title = 'EL COMPLEMENTO PERFECTO ';
  user: Login;
  errorLogin = false;
  customError = false;
  formLogin: FormGroup;
  customErrorData = {
    message:'',
    url:''
  }
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }



  login() {
    if (this.formLogin.invalid) {
      return;
    }
    // this.loadingComponent.setDisplay(true);
    let { username, password } = this.formLogin.value;
    this.user = {
      username: username,
      password
    }

    // this.router.navigateByUrl('/interface');
    this.auth.login(this.user).subscribe(resp => {
      console.log('login',resp);
      this.router.navigateByUrl('/buscar-pedido');
    }, (err) => {
      console.log('err',err);
      if(err.error.statusCode == 401){
      this.errorLogin = true;
      }
      if(err.error.statusCode == 403){
        this.errorLogin = false;
        this.customError = true;
        this.customErrorData = {
          message:'Cuenta bloqueada. contacta a tu administrador',
          url:''
        }
      }
      // this.loadingComponent.setDisplay(false);
      // this.errorLogin = true;
    });
  }
}
