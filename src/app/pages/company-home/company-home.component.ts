import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company/company.service';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.scss']
})
export class CompanyHomeComponent {
  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {
    this.getAllCompany(this.limit, this.page);
  }
  limit = 10;
  page = 1;
  listCompany = [];
  total = 0;
  searchCompany = new FormGroup({
    search: new FormControl()
  });
  getAllCompany(limit: number, page: number, search?: string) {
    this.companyService
      .FindAllCompanyApi(limit, page, search)
      .subscribe(res => {
        console.log(res);
        this.listCompany = res.data;
        this.total = res.total;
      });
  }

  naviagate(company: any) {
    const { id } = company;
    this.router.navigate([`company/${id}`]);
  }

  pageChanged(event: any) {
    this.page = event;
    this.getAllCompany(this.limit, event);
  }

  onSubmit() {
    const { value } = this.searchCompany.controls.search;
    this.getAllCompany(this.limit, this.page, value);
  }
}
