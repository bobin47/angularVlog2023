import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostService } from 'src/app/service/post/post.service';
import { getUserFormLC } from 'src/app/utils/auth.utils';
import { CreatePostComponent } from './create-post/create-post.component';

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
      console.log(res);
      this.postList = res
    });
  }

  naviagate(post:any){
    console.log(post)
  }

  createPost(){
    this.dialog.open(CreatePostComponent,{
      width:"700px",
      height:"700px"
    })
  }
}
