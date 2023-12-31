import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostService } from 'src/app/service/post/post.service';
import { getUserFormLC } from 'src/app/utils/auth.utils';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private postService: PostService, public dialog: MatDialog) {}
  user = getUserFormLC();
  postList = []
  ngOnInit(): void {
    this.getAllPostUser()
  }

  getAllPostUser() {
    this.postService.getPostWithIdUser(this.user.email).subscribe(res => {
      this.postList = res
    });
  }

  naviagate(post:any){
  }

  createPost(){
    this.dialog.open(CreatePostComponent,{
      width:"700px",
      height:"700px"
    })
  }

  EditProfile(){
    this.dialog.open(EditProfileComponent,{
      width:"700px",
      height:"700px"
    })
  }
}
