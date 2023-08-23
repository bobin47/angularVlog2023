import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.scss']
})
export class CreateCategoryDialogComponent {
  constructor(
    private categoryService: CategoryService,
    private _snackBar: MatSnackBar
  ) {}

  createCategoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', {}),
    status: new FormControl('', {})
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  onSubmit() {
    const { description, name, status } = this.createCategoryForm.value;
    const body = { description, name, status };
    this.categoryService.CreateCategoryApi(body).subscribe(
      res => {
        if (res.status === 200) {
          this._snackBar.open(res.message, 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
          });
        } else {
          this._snackBar.open('loi roi', 'close');
        }
      },

      err => {
        this._snackBar.open('loi roi', 'close');
      }
    );
  }

  getErrorMessage() {
    if (this.createCategoryForm.controls.name.hasError('required')) {
      return 'Name la bac buoc';
    }
    return undefined;
  }
}
