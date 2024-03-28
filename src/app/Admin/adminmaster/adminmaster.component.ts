import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmaster',
  templateUrl: './adminmaster.component.html',
  styleUrls: ['./adminmaster.component.scss']
})
export class AdminmasterComponent {

  constructor(private router: Router){}
  logOut() {
    if (confirm('Do you want to logout?')) {
      localStorage.removeItem('loginid');
      this.router.navigate(['/guestmaster/login']);
    }
  }
}
