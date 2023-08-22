import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { getUserFormLC } from '../utils/auth.utils';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _snackBar: MatSnackBar) {}
  canActivate() {
    if (getUserFormLC()) {
      this.router.navigate(['home']);
      this._snackBar.open("Ban da co tai khoang","close")
      return true;
    } 
    return true
  }
}
