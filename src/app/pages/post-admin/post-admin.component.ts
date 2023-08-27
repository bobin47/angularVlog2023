import { CategoryService } from './../../service/category/category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PostService } from 'src/app/service/post/post.service';
import { CreatePostDialogComponent } from './create-post-dialog/create-post-dialog.component';
import { EditPostDialogComponent } from './edit-post-dialog/edit-post-dialog.component';
import { DeletePostDialogComponent } from './delete-post-dialog/delete-post-dialog.component';
import { CategoryType } from 'src/app/types/category.type';

@Component({
  selector: 'app-post-admin',
  templateUrl: './post-admin.component.html',
  styleUrls: ['./post-admin.component.scss']
})
export class PostAdminComponent implements OnInit {
  constructor(
    private postService: PostService,
    public dialog: MatDialog,
    private categoryService: CategoryService
  ) {}
  tablePostSearch = new FormGroup({
    search: new FormControl('')
  });
  limit: number = 10;
  page: number = 1;
  myDataArray = [];
  columnsToDisplay = [
    'id',
    'title',
    'description',
    'thumbnail',
    'status',
    'created_at',
    'updated_at',
    'action'
  ];
  total = 0;
  categoryList: CategoryType[] = [];
  selectedOption: any;

  ngOnInit(): void {
    this.getAllPost(this.limit, this.page);
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.CategoryApi().subscribe(res => {
      console.log(res.data);
      this.categoryList = res.data;
    });
  }

  getAllPost(limit: number, page: number, search?: string, category?: number) {
    this.postService
      .GetAllPost(limit, page, search, category)
      .subscribe(res => {
        console.log(res.data);
        this.myDataArray = res.data;
        this.total = res.total;
      });
  }

  Refresh() {
    this.selectedOption = 0
    this.getAllPost(this.limit, this.page, undefined, undefined);
  }

  create() {
    this.dialog.open(CreatePostDialogComponent, {
      width: '1000px',
      height: '500px'
    });
  }

  onSubmit() {
    const searchValue = this.tablePostSearch.controls.search.value || undefined;
    console.log(searchValue);
    this.getAllPost(this.limit, this.page, searchValue);
  }

  edit(post: any) {
    this.dialog.open(EditPostDialogComponent, {
      width: '1000px',
      height: '500px',
      data: post
    });
  }

  delete(post: any) {
    this.dialog.open(DeletePostDialogComponent, {
      width: '400px',
      height: '200px',
      data: post
    });
  }

  handlePageEvent(e: any) {}

  onSelectionChange(event: any) {
    console.log(this.selectedOption)
    console.log('Đã chọn:', event.value);
    this.getAllPost(this.limit, this.page, undefined, event.value);
  }
}
