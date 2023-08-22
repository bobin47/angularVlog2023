import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { clearLC } from 'src/app/utils/auth.utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router){
    
  }
  @Output() buttonClick = new EventEmitter<void>();
  
  onMenuList(){
    this.buttonClick.emit();
  }

  Logout(){
    clearLC()
    this.router.navigate(['home'])
  }
}
