import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyService } from 'src/app/service/company/company.service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.scss']
})
export class DeleteCompanyComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private companyService: CompanyService,
    private _snackBar: MatSnackBar
  ) {}
  handleDelete() {
    const { id } = this.data;
    this.companyService.DeleteCompanyApi(id).subscribe(res => {
      if (res) {
        this._snackBar.open(res.message, 'Close');
      }
    });
  }
}
