import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/core/services/login.model';

@Component({
  selector: 'app-home',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  title = 'EL COMPLEMENTO PERFECTO ';
  user: Login;
  errorLogin = false;
  customError = false;
  formData: FormGroup;
  customErrorData = {
    message:'',
    url:''
  }
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.formData = this.fb.group({

      folio: ['', [Validators.required]]
    });

  }



  folio() {

  }
}
