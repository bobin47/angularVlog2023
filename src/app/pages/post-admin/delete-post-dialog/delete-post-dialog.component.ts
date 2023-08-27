import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/service/post/post.service';

@Component({
  selector: 'app-delete-post-dialog',
  templateUrl: './delete-post-dialog.component.html',
  styleUrls: ['./delete-post-dialog.component.scss']
})
export class DeletePostDialogComponent {
  constructor(
    private _snackBar: MatSnackBar,
    private servicePost: PostService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  handleDelete() {
    const { id } = this.data;
    this.servicePost.deletePostApi(id).subscribe(res => {
      if (res) {
        this._snackBar.open(res.message, 'Close');
      }
    });
  }
}
