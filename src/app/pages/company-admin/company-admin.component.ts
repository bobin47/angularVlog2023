import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from 'src/app/service/company/company.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-company-admin',
  templateUrl: './company-admin.component.html',
  styleUrls: ['./company-admin.component.scss']
})
export class CompanyAdminComponent {
  constructor(
    private companyService: CompanyService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getAllListCompany(this.limit, this.page);
  }
  listCompany = [];
  columnsToDisplay = [
    'id',
    'name',
    'address',
    'logo',
    'description',
    // 'created_at',
    // 'updated_at',
    'action'
  ];
  total = 0;
  limit = 10;
  page = 1;
  tableCompanySearch = new FormGroup({
    search: new FormControl('')
  });

  getAllListCompany(limit: number, page: number, search?: string) {
    this.companyService.FindAllCompanyApi(limit, page, search).subscribe(
      res => {
        console.log(res);
        const { total } = res;
        this.listCompany = res.data;
        this.total = total;
      },
      err => {
        console.log(err);
      }
    );
  }

  Refresh() {
    this.getAllListCompany(this.limit, this.page);
  }

  create() {
    const open = this.dialog.open(CreateCompanyComponent, {
      width: '400px',
      height: '600px'
    });
  }

  edit(company: any) {
    const open = this.dialog.open(EditCompanyComponent, {
      width: '400px',
      height: '600px',
      data: company
    });
  }

  delete(company: any) {
    const open = this.dialog.open(DeleteCompanyComponent, {
      width: '400px',
      height: '200px',
      data: company
    });
  }

  handlePageEvent(event: PageEvent) {
    this.limit = event.pageSize;
    this.getAllListCompany(this.limit, event.pageIndex + 1);
  }

  onSubmit() {
    const searchValue =
      this.tableCompanySearch.controls.search.value || undefined;
    this.getAllListCompany(this.limit, this.page, searchValue);
  }
}
