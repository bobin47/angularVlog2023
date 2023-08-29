import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post/post.service';
import { PostDetail } from 'src/app/types/category.type';
@Component({
  selector: 'app-detailpost',
  templateUrl: './detailpost.component.html',
  styleUrls: ['./detailpost.component.scss']
})
export class DetailpostComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  postDetail!:PostDetail
  ngOnInit(): void {
      this.getDetailPost()
  }

  getDetailPost(){
    this.activatedRoute.params.subscribe(res => {
      const { id } = res;
      this.postService.detailPost(id).subscribe(
        res=>{
          console.log(res)
          this.postDetail = res
        }
      );
    });
  }
}
