import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyService } from 'src/app/service/company/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent {
  constructor(private companyService: CompanyService,private _snackBar: MatSnackBar) {}
  createCompanyForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    address: new FormControl()
  });
  selectedImage: string | ArrayBuffer | null = null;
  formData: FormData = new FormData();

  onSubmit() {
    const content: { [key: string]: string | number } = this.createCompanyForm
      .value;

    for (const key in content) {
      if (content.hasOwnProperty(key)) {
        this.formData.append(key, content[key].toString());
      }
    }

    this.companyService.createCompanyApi(this.formData).subscribe(res => {
      if (res) {
        this._snackBar.open(res.message, 'Close');
      }
    });
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
      this.formData.append('company', selectedFile);
    }
  }
}
