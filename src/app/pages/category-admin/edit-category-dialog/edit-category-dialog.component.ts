import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.scss']
})
export class EditCategoryDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService,
    private _snackBar: MatSnackBar
  ) {}
  upDateCategoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', {}),
    status: new FormControl('', {})
  });

  ngOnInit() {
    const { name, description, status } = this.data.category;
    this.upDateCategoryForm.controls.name.setValue(name);
    this.upDateCategoryForm.controls.description.setValue(description);
    this.upDateCategoryForm.controls.status.setValue(status);
  }

  onSubmit() {
    const {  id } = this.data.category;
    const {description,name,status} = this.upDateCategoryForm.value
    const body = {description,name,status}
    this.categoryService.UpdateCategoryApi(id,body).subscribe(
      res=>{
        if(res.status === 200){
          this._snackBar.open(res.message,"Close")
        }
      }
    )
  }

  getErrorMessage() {
    if (this.upDateCategoryForm.controls.name.hasError('required')) {
      return 'Name la bac buoc';
    }
    return undefined;
  }
}
