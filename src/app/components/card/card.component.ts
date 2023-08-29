import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DialogDeletepostPostComponent } from './dialog-deletepost-post/dialog-deletepost-post.component';
import { DialogEditPostComponent } from './dialog-edit-post/dialog-edit-post.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor(private route: ActivatedRoute,public dialog: MatDialog) {}
  ngOnInit(): void {
    const currentUrl = this.route.snapshot.url.join('/');
    if (currentUrl === 'home') {
      this.check = false;
    }
  }
  
  @Input() aPost: any;
  check = true;

  Delete(){
    this.dialog.open(DialogDeletepostPostComponent,{
      width:"400px",
      height:"200px",
      data:this.aPost
    })
  }
  
  Edit(){
    this.dialog.open(DialogEditPostComponent,{
      width:"700px",
      height:"700px",
      data:this.aPost
    })
  }
}
