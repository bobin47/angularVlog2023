import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CategoryService } from 'src/app/service/category/category.service';
import { PostService } from 'src/app/service/post/post.service';
import { CategoryType } from 'src/app/types/category.type';
import { getUserFormLC } from 'src/app/utils/auth.utils';

@Component({
  selector: 'app-edit-post-dialog',
  templateUrl: './edit-post-dialog.component.html',
  styleUrls: ['./edit-post-dialog.component.scss']
})
export class EditPostDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService,
    private postService: PostService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getCategory();
    this.setValuePostInForm();
  }

  public selectedImage: string | ArrayBuffer | null = null;
  public editorContent = '';
  public editorConfig = {};
  public Editor = ClassicEditor;
  public categoryList: CategoryType[] = [];
  public selectedOption: any;
  public formEditPost = new FormGroup({
    title: new FormControl(''),
    status: new FormControl(''),
    category: new FormControl('')
  });
  public formData = new FormData();

  setValuePostInForm() {
    const { title, status, category, thumbnail, description } = this.data;
    this.formEditPost.controls.title.setValue(title);
    this.formEditPost.controls.status.setValue(status);
    this.selectedOption = category.id;
    this.selectedImage = `http://localhost:3000/${thumbnail}`;
    this.editorContent = description;
  }

  getCategory() {
    this.categoryService.CategoryApi().subscribe(res => {
      console.log(res.data);
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
      console.log(this.selectedImage);
      reader.readAsDataURL(selectedFile);
      // console.log('Bạn đã chọn tệp:', selectedFile);
      this.formData.append('thumbnail', selectedFile);
    }
  }

  onSave() {
    const content = this.editorContent;
    const { id } = this.data;
    console.log('id', id);
    let postBody: { [key: string]: string | number } = {
      title: this.formEditPost.controls.title.value as string,
      status: this.formEditPost.controls.status.value as string,
      category: this.formEditPost.controls.category.value as string,
      description: content
    };

    for (const key in postBody) {
      if (postBody.hasOwnProperty(key) && postBody[key] !== null) {
        this.formData.append(key, postBody[key].toString());
      }
    }

    this.postService.editPostApi(this.formData, id).subscribe(res => {
      if(res){
        this._snackBar.open(res.message,"Close")
      }
    });
  }
}
