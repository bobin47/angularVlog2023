import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { getUserFormLC } from '../utils/auth.utils';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private _snackBar: MatSnackBar) {}
  canActivate() {
    const user = getUserFormLC();
    if (user.roles === 'Admin') {
      return true;
    } else if (!user) {
      this._snackBar.open('ban chua dang nhap', 'close');
      return false;
    } else {
      this._snackBar.open('ban khong quyen truy cap', 'close');
      this.router.navigate(['home']);
      return false;
    }
  }
}
