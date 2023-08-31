import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-create-user',
  templateUrl: './dialog-create-user.component.html',
  styleUrls: ['./dialog-create-user.component.scss']
})
export class DialogCreateUserComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogCreateUserComponent>,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  createUserForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl(''),
    status: new FormControl('')
  });

  getErrorMessage(field: string): string | undefined {
    if (field === 'email') {
      if (this.createUserForm.controls.email.hasError('required')) {
        return 'You must enter a value';
      }
      return this.createUserForm.controls.email.hasError('email')
        ? 'Not a valid email'
        : '';
    }

    if (field === 'password') {
      if (this.createUserForm.controls.password.hasError('required')) {
        return 'You must enter a value';
      }
      if (this.createUserForm.controls.password.hasError('minlength')) {
        return 'Pass min 6';
      }
    }

    if (field === 'first_name') {
      if (this.createUserForm.controls.first_name.hasError('required')) {
        return 'You must enter a value';
      }
    }

    return undefined;
  }

  onSubmit() {
    const {
      email,
      first_name,
      last_name,
      password,
      status
    } = this.createUserForm.value;
    const body = { email, first_name, last_name, password, status };
    this.userService.createUser(body).subscribe(res => {
      if (res.status === 200) {
        this._snackBar.open(res.message, 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        });
      } else {
        this._snackBar.open('loi roi', 'close');
      }
    });
  }
}
