import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user/user.service';
import { getUserFormLC, setUserFormLC } from 'src/app/utils/auth.utils';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.setValueInform();
  }
  isChangeFileAvatar: boolean = false;
  user = getUserFormLC();
  formCreatePost = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    status: new FormControl('')
  });

  public selectedImage: string | ArrayBuffer | null = null;

  formData = new FormData();

  setValueInform() {
    const { first_name, last_name, avatar } = this.user;
    this.formCreatePost.controls.first_name.setValue(first_name);
    this.formCreatePost.controls.last_name.setValue(last_name);
    this.selectedImage = `http://localhost:3000/${avatar}`;
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.isChangeFileAvatar = true;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
      this.formData.append('avatar', selectedFile);
    }
  }

  onSave() {
    const { id } = this.user;
    const body = {
      first_name: this.formCreatePost.controls.first_name.value,
      last_name: this.formCreatePost.controls.last_name.value
    };

    this.userService.updateUser(id, body).subscribe(res => {
      if(!this.isChangeFileAvatar){
        setUserFormLC(res.user);
      }
      if (res) {
        this._snackBar.open(res.message, 'Close');
      }
    });

    if (this.isChangeFileAvatar) {
      this.userService.uploadAva(this.formData).subscribe(res => {
      setUserFormLC(res);
      });
    }
    this.isChangeFileAvatar = false;
  }
}
