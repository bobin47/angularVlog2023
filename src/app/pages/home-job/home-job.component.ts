import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job/job.service';
import { ApplyVcComponent } from './apply-vc/apply-vc.component';

@Component({
  selector: 'app-home-job',
  templateUrl: './home-job.component.html',
  styleUrls: ['./home-job.component.scss']
})
export class HomeJobComponent {
  constructor(
    private jobService: JobService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllListJob(this.limit, this.page);
  }

  limit = 10;
  page = 1;
  total = 0;
  listJob: any;

  searchCompany = new FormGroup({
    search: new FormControl()
  });

  getAllListJob(limit: number, page: number, search?: string) {
    this.jobService.FindAllJobApi(limit, page, search).subscribe(res => {
      const { data, total } = res;
      this.listJob = data;
      this.total = total;
    });
  }

  onSubmit() {
    const { value } = this.searchCompany.controls.search;
  }

  naviagate(job: any) {
    const { id } = job;
    this.router.navigate([`job/${id}`]);
  }

  pageChanged(event: any) {
    this.page = event;
    this.getAllListJob(this.limit, event);
  }

  Apply(item: any) {
    this.dialog.open(ApplyVcComponent, {
      width: '400px',
      height: '200px',
      data: item
    });
  }
}
