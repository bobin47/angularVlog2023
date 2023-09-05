import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobService } from 'src/app/service/job/job.service';

@Component({
  selector: 'app-apply-vc',
  templateUrl: './apply-vc.component.html',
  styleUrls: ['./apply-vc.component.scss']
})
export class ApplyVcComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private jobService: JobService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log(this.data.id);
  }

  formData: FormData = new FormData();

  onFileSelect(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.formData.append('linkCv', selectedFile);
    }
  }

  OnApply() {
    const { id } = this.data;
    this.formData.append('job', id);
    this.jobService.ApplyCv(this.formData).subscribe(
      res=>{
        console.log(res)
        if(res){
          this._snackBar.open(res.message,"Close")
        }
      }
    )
  }
}
