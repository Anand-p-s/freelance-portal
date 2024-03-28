import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-client-master',
  templateUrl: './client-master.component.html',
  styleUrls: ['./client-master.component.scss'],
})
export class ClientMasterComponent {
  public clientArray: any;

  constructor(private router: Router, private db: DbserviceService) {}

  ngOnInit() {
    const loginid = localStorage.getItem('loginid');
    this.db.getClientDetails({ loginid }).then((data: any) => {
      this.clientArray = data;
    });
  }

  logOut() {
    if (confirm('Do you want to logout?')) {
      localStorage.removeItem('loginid');
      this.router.navigate(['/guestmaster/login']);
    }
  }
}
