import { Component } from '@angular/core';
import { CreateJobComponent } from './create-job/create-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { DeleteJobComponent } from './delete-job/delete-job.component';
import { JobService } from 'src/app/service/job/job.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-admin',
  templateUrl: './job-admin.component.html',
  styleUrls: ['./job-admin.component.scss']
})
export class JobAdminComponent {
  constructor(private jobService: JobService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllJob(this.limit, this.page);
  }

  tableCompanySearch = new FormGroup({
    search: new FormControl('')
  });

  listJob = [];
  columnsToDisplay = [
    'id',
    'name',
    'level',
    'salary',
    'description',
    'endDate',
    'startDate',
    'skill',
    'quantity',
    'company',
    'action'
  ];
  total = 0;
  limit = 10;
  page = 1;

  getAllJob(limit: number, page: number, search?: string) {
    this.jobService.FindAllJobApi(limit, page, search).subscribe(res => {
      this.listJob = res.data;
      const { total } = res;
      this.total = total;
    });
  }

  Refresh() {
    this.getAllJob(this.limit, this.page);
  }

  create() {
    this.dialog.open(CreateJobComponent, {
      width: '400px',
      height: '400px'
    });
  }

  edit(company: any) {
    this.dialog.open(EditJobComponent, {
      width: '400px',
      height: '400px',
      data: company
    });
  }

  delete(company: any) {
    this.dialog.open(DeleteJobComponent, {
      width: '400px',
      height: '200px',
      data: company
    });
  }

  handlePageEvent($event: any) {}

  onSubmit() {
    const searchValue =
      this.tableCompanySearch.controls.search.value || undefined;
    console.log(searchValue);
    this.getAllJob(this.limit, this.page, searchValue);
  }
}
