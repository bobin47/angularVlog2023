import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyService } from 'src/app/service/company/company.service';
import { JobService } from 'src/app/service/job/job.service';
import { CompanyType } from 'src/app/types/category.type';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent {
  constructor(
    private jobService: JobService,
    private companyService: CompanyService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    console.log("create Job")
    this.getAllCompany()
  
  }

  getAllCompany(){
    this.companyService.AllCompanyApiNoP().subscribe(
      res=>{
        console.log(res)
        this.listCompany = res.company
      }
    )
  }

  selectedOption: any;
  listCompany:CompanyType[] = []
  formCreateJob = new FormGroup({
    range: new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null)
    }),
    name:new FormControl(),
    description:new FormControl(),
    skill:new FormControl(),
    salary:new FormControl(),
    level:new FormControl(),
    quantity:new FormControl(),
    company:new FormControl()
  });


  

  OnSave(){
    const startDate = this.formCreateJob.controls.range.get('start')?.value?.toISOString() 
    const endDate = this.formCreateJob.controls.range.get('end')?.value?.toISOString() 
    const idCompany = this.formCreateJob.controls.company.value
    const value = this.formCreateJob.value
    delete value.range
    const body = {...value,startDate,endDate,company:{id:idCompany}}
    console.log(body)
    this.jobService.createJobApi(body).subscribe(
      res=>{
        if(res){
          this._snackBar.open(res.message,"Close")
        }
      }
    )
  }
}
