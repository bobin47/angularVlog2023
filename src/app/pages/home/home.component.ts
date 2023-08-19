import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() {}
  expression = 'h1';
  userName: string = 'chuong';
  link: string =
    'https://assets.imgcreator.ai/ui/img-creator-pc/For+Professional/44.webp';

  age: number = 18;
  clickMe(event: Event) {
    console.log(event);
  }

  enterName(event: any) {
    // this.userName = event.target.value;
    console.log(event.target.value);
    this.userName = event.target.value;
  }
}
