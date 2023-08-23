import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/service/category/category.service';
import { CategoryType } from 'src/app/types/category.type';
import { CreateCategoryDialogComponent } from './create-category-dialog/create-category-dialog.component';
import { EditCategoryDialogComponent } from './edit-category-dialog/edit-category-dialog.component';
import { DeleteCategoryDialogComponent } from './delete-category-dialog/delete-category-dialog.component';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog
  ) {}
  listCategory: CategoryType[] = [];
  columnsToDisplay = [
    'id',
    'name',
    'description',
    'status',
    'created_at',
    'updated_at',
    'action'
  ];
  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.CategoryApi().subscribe(res => {
      this.listCategory = res.data;
    });
  }

  Refresh() {
    this.getAllCategory();
  }

  create() {
    const dialogRef = this.dialog.open(CreateCategoryDialogComponent, {
      height: '400px',
      width: '600px'
    });
  }

  edit(category: any) {
    const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
      height: '400px',
      width: '600px',
      data: { category }
    });
  }
  
  delete(category: any) {
    console.log(category)
    const dialogRef = this.dialog.open(DeleteCategoryDialogComponent, {
      width: '400px',
      height: '200px',
      data: { category }
    });
  }
}
