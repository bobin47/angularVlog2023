import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { UserService } from 'src/app/service/user/user.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss']
})
export class DialogDeleteUserComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEditUserComponent>,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  id: number = this.data.element.id;

  ngOnInit() {}

  handleDelete() {
    const { id } = this.data.element;
    this.userService.deleteUser(id).subscribe(res => {
      const { status, message } = res;
      if (status === 200) {
        this._snackBar.open(message, 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        });
      } else {
        this._snackBar.open('loi roi', 'close');
      }
    });
  }
}
