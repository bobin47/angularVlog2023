import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyService } from 'src/app/service/company/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent {
  constructor(
    private companyService: CompanyService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  createCompanyForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    address: new FormControl()
  });
  selectedImage: string | ArrayBuffer | null = null;
  formData: FormData = new FormData();

  ngOnInit(): void {
    this.addValueInForm();
  }

  addValueInForm() {
    const { name, description, address, logo } = this.data;
    console.log(this.data);
    this.createCompanyForm.controls.name.setValue(name);
    this.createCompanyForm.controls.description.setValue(description);
    this.createCompanyForm.controls.address.setValue(address);
    this.selectedImage = `http://localhost:3000/${logo}`;
  }

  onSubmit() {
    const { id } = this.data;
    const content: { [key: string]: string | number } = this.createCompanyForm
      .value;

    for (const key in content) {
      if (content.hasOwnProperty(key)) {
        this.formData.append(key, content[key].toString());
      }
    }

    this.companyService.updateCompanyApi(id, this.formData).subscribe(res => {
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
