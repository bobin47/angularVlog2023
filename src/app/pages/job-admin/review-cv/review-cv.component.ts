import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-review-cv',
  templateUrl: './review-cv.component.html',
  styleUrls: ['./review-cv.component.scss']
})
export class ReviewCvComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  IsHaveCv: boolean = false;
  ngOnInit(): void {
    if (this.data.length === 0) {
      this.IsHaveCv = true;
    }
    console.log(this.data.length);
  }
}
