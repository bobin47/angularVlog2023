import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-delete-category-dialog',
  templateUrl: './delete-category-dialog.component.html',
  styleUrls: ['./delete-category-dialog.component.scss']
})
export class DeleteCategoryDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService,
    private _snackBar: MatSnackBar
  ) {}

  handleDelete() {
    const { id } = this.data.category;
    console.log(this.data)
    this.categoryService.DeleteCategoryApi(id).subscribe(
      res=>{
        if(res.status === 200){
          this._snackBar.open(res.message,"Close")
        }
      }
    );
  }
}
