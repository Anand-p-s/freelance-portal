import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-freelancermaster',
  templateUrl: './freelancermaster.component.html',
  styleUrls: ['./freelancermaster.component.scss'],
})
export class FreelancermasterComponent {
  freelancerArray: any;

  constructor(private router: Router, private db: DbserviceService) {}

  ngOnInit() {
    const loginid = localStorage.getItem('loginid');
    this.db.getFreelancerById({ loginid }).then((data: any) => {
      this.freelancerArray = data;
    });
  }

  logOut() {
    if (confirm('Do you want to logout?')) {
      localStorage.removeItem('loginid');
      this.router.navigate(['/guestmaster/login']);
    }
  }
}
