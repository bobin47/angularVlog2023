import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CategoryService } from 'src/app/service/category/category.service';
import { PostService } from 'src/app/service/post/post.service';
import { CategoryType } from 'src/app/types/category.type';
import { getUserFormLC } from 'src/app/utils/auth.utils';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private postService: PostService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  selectedImage: string | ArrayBuffer | null = null;
  selectedOption: any;
  categoryList: CategoryType[] = [];
  editorContent = '';
  editorConfig = {};
  public Editor = ClassicEditor;
  formCreatePost = new FormGroup({
    title: new FormControl(''),
    status: new FormControl(''),
    category: new FormControl('')
  });
  formData = new FormData();

  getCategory() {
    this.categoryService.CategoryApi().subscribe(res => {
      this.categoryList = res.data;
    });
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
      this.formData.append('thumbnail', selectedFile);
    }
  }
  onSave() {
    const content = this.editorContent;
    const user = getUserFormLC();
    let postBody: { [key: string]: string | number } = {
      title: this.formCreatePost.controls.title.value as string,
      status: this.formCreatePost.controls.status.value as string,
      category: this.formCreatePost.controls.category.value as string,
      description: content,
      user: user.id
    };

    for (const key in postBody) {
      if (postBody.hasOwnProperty(key) && postBody[key] !== null) {
        this.formData.append(key, postBody[key].toString());
      }
    }

    this.formData.forEach((value, key) => {
    });

    this.postService.uploadFormData(this.formData).subscribe(res => {
      if (res) {
        this._snackBar.open(res.message, 'Close');
      }
    });
  }
}
