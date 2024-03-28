import { Component } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-freelancerprofile',
  templateUrl: './freelancerprofile.component.html',
  styleUrls: ['./freelancerprofile.component.scss']
})
export class FreelancerprofileComponent {
  public freelancerArray: any;

  constructor(private db: DbserviceService) {}

  ngOnInit() {
    const loginid = localStorage.getItem('loginid');

    this.db.getFreelancerById({ loginid }).then((data: any) => {
      this.freelancerArray = data;
    });
  }
}
