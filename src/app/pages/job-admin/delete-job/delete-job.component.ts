import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobService } from 'src/app/service/job/job.service';

@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html',
  styleUrls: ['./delete-job.component.scss']
})
export class DeleteJobComponent {
  constructor(
    private jobService: JobService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}

  handleDelete() {
    const { id } = this.data;
    this.jobService.DeleteJobApi(id).subscribe(res => {
      if (res) {
        this._snackBar.open(res.message, 'Oke');
      }
    });
  }
}
