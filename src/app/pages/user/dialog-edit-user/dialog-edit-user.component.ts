import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/types/user.type';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEditUserComponent>,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  upDateUserForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl(),
    status: new FormControl(),
    id: new FormControl()
  });

  getErrorMessage() {
    if (this.upDateUserForm.controls.first_name.hasError('required')) {
      return 'This field is require';
    }
    return undefined;
  }

  ngOnInit() {
    const { first_name, status, last_name, id } = this.data.element;
    this.upDateUserForm.controls.first_name.setValue(first_name);
    this.upDateUserForm.controls.status.setValue(status);
    this.upDateUserForm.controls.last_name.setValue(last_name);
    this.upDateUserForm.controls.id.setValue(id);
  }

  onSubmit() {
    const { id, first_name, last_name, status } = this.upDateUserForm.value;
    const body = { first_name, last_name, status };
    this.userService.updateUser(id, body).subscribe(res => {
      if (res.status === 200){
        this._snackBar.open(res.message, 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        });
      }else{
        this._snackBar.open("loi roi","close")
      }
    });
  }
}
