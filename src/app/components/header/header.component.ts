import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { clearLC, getUserFormLC } from 'src/app/utils/auth.utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router){
  }
  user = getUserFormLC()
  
  @Output() buttonClick = new EventEmitter<void>();
  
  onMenuList(){
    this.buttonClick.emit();
  }

  Logout(){
    clearLC()
    document.location.assign('home')
  }

  Profile(){
    this.router.navigate(['profile'])
  }
  Login(){
    this.router.navigate(['login'])
  }

  Register(){
    this.router.navigate(['register'])
  }
}
