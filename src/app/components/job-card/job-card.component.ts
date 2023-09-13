import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogVcComponent } from './dialog-vc/dialog-vc.component';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  constructor(public dialog: MatDialog) {}
  @Input() listJob: any;
  ngOnInit() {
    console.log(this.listJob.length);
  }

  OpenDialog(item: any) {
    this.dialog.open(DialogVcComponent, {
      width: '400px',
      height: '200px',
      data: item
    });
  }
}
