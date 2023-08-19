import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnChanges {
  @Input() userName = '';

  ngOnChanges(change: SimpleChanges) {
    console.log('change', change);
  }
}
