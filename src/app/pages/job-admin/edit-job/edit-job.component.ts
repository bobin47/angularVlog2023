import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyService } from 'src/app/service/company/company.service';
import { JobService } from 'src/app/service/job/job.service';
import { CompanyType } from 'src/app/types/category.type';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent {
  constructor(
    private _snackBar: MatSnackBar,
    private companyService: CompanyService,
    private jobService:JobService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    console.log(this.data);
    this.getAllCompany()
    this.setValueInFrom();
  }

  selectedOption = 1
  listCompany: CompanyType[] = [];
  formCreateJob = new FormGroup({
    range: new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null)
    }),
    name: new FormControl(),
    description: new FormControl(),
    skill: new FormControl(),
    salary: new FormControl(),
    level: new FormControl(),
    quantity: new FormControl(),
    company: new FormControl()
  });

  getAllCompany(){
    this.companyService.FindAllCompanyApi(10,1).subscribe(
      res=>{
        console.log(res.data)
        this.listCompany = res.data
      }
    )
  }

  setValueInFrom() {
    const {
      name,
      description,
      skill,
      salary,
      level,
      quantity,
      company,
      startDate,
      endDate
    } = this.data;
    const startDateToDate = new Date(startDate)
    const endDateToDate = new Date(endDate)
    this.formCreateJob.controls.range.controls.start.setValue(startDateToDate)
    this.formCreateJob.controls.range.controls.end.setValue(endDateToDate)
    this.formCreateJob.controls.name.setValue(name);
    this.formCreateJob.controls.description.setValue(description);
    this.formCreateJob.controls.skill.setValue(skill);
    this.formCreateJob.controls.salary.setValue(salary);
    this.formCreateJob.controls.level.setValue(level);
    this.formCreateJob.controls.quantity.setValue(quantity);
    this.selectedOption = company.id;
  }

  OnSave() {
    const startDate = this.formCreateJob.controls.range.get('start')?.value?.toISOString() 
    const endDate = this.formCreateJob.controls.range.get('end')?.value?.toISOString() 

    const value = this.formCreateJob.value
    delete value.range
    const body = {...value,startDate,endDate}
    const {id} = this.data 


    this.jobService.updateJobApi(id,body).subscribe(
      res=>{
        if(res){
          this._snackBar.open(res.message,"Close")
        }
       
      },
      err=>{
        console.log(err)
      }
    )
  }
}
