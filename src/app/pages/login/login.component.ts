import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { setAccessTokenFormLC, setRefresherTokenFormLC, setUserFormLC } from 'src/app/utils/auth.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  hide = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  onSubmit() {
    const { email, password } = this.loginForm.value;

    const body = {
      email,
      password
    };

    this.authService.LoginApi(body).subscribe(
      res => {
        const {access_token,refresh_token,user} = res?.res?.data
        setAccessTokenFormLC(access_token)
        setRefresherTokenFormLC(refresh_token)
        setUserFormLC(user)
        this._snackBar.open('OK', 'close');
        document.location.assign("home")
        
      },
      err => {
        this._snackBar.open('Fail', 'close');
      }
    );
  }

  getErrorMessage(field: string): string | undefined {
    if (field === 'email') {
      if (this.loginForm.controls.email.hasError('required')) {
        return 'You must enter a value';
      }
      return this.loginForm.controls.email.hasError('email')
        ? 'Not a valid email'
        : '';
    }

    if (field === 'password') {
      if (this.loginForm.controls.password.hasError('required')) {
        return 'You must enter a value';
      }
      if (this.loginForm.controls.password.hasError('minlength')) {
        return 'Pass min 6';
      }
    }

    return '';
  }
}
