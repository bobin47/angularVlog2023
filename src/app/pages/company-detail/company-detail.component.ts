import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/service/company/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent {
  constructor(
    private companyService: CompanyService,
    private activatedRoute: ActivatedRoute
  ) {}

  company:any
  listJob:any
  
  ngOnInit(): void {
    this.getDetailCompany();
  }

  getDetailCompany() {
    this.activatedRoute.params.subscribe(res => {
      const { id } = res;
      this.companyService.FindOneCompanyApi(id).subscribe(res => {
        console.log(res);
        this.company = res[0]
        this.listJob = res[0].jobs

        console.log(this.listJob)
      });
    });
  }
}
