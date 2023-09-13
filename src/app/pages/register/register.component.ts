import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl(''),
    status: new FormControl('')
  });

  onSubmit() {
    const {
      email,
      password,
      first_name,
      last_name,
      status
    } = this.registerForm.value;

    const body = {
      email,
      password,
      first_name,
      last_name,
      status
    };

    this.authService.RegisterApi(body).subscribe(
      res => {
        this._snackBar.open('dang ky thanh cong', 'close');
      },
      err => {
        this._snackBar.open('dang ky k thanh cong', 'close');
      }
    );
  }

  getErrorMessage(field: string): string | undefined {
    if (field === 'email') {
      if (this.registerForm.controls.email.hasError('required')) {
        return 'You must enter a value';
      }
      return this.registerForm.controls.email.hasError('email')
        ? 'Not a valid email'
        : '';
    }

    if (field === 'password') {
      if (this.registerForm.controls.password.hasError('required')) {
        return 'You must enter a value';
      }
      if (this.registerForm.controls.password.hasError('minlength')) {
        return 'Pass min 6';
      }
    }

    if (field === 'first_name') {
      if (this.registerForm.controls.first_name.hasError('required')) {
        return 'You must enter a value';
      }
    }

    return undefined;
  }
}
