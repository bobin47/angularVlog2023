import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/service/post/post.service';

@Component({
  selector: 'app-dialog-deletepost-post',
  templateUrl: './dialog-deletepost-post.component.html',
  styleUrls: ['./dialog-deletepost-post.component.scss']
})
export class DialogDeletepostPostComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private postService: PostService,
    private _snackBar: MatSnackBar
  ) {}
  handleDelete() {
    const { id } = this.data;
    this.postService.deletePostApi(id).subscribe(res => {
      if (res) {
        this._snackBar.open(res.message, 'Close');
      }
    });
  }
}
