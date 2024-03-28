import { Component } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-freelancerprojects',
  templateUrl: './freelancerprojects.component.html',
  styleUrls: ['./freelancerprojects.component.scss'],
})
export class FreelancerprojectsComponent {
  public projectArray: any;
  public status: any = 'accepted';
  constructor(private db: DbserviceService) {}

  ngOnInit() {
    const id = localStorage.getItem('loginid');
    this.db.getReqById({ id }).then((data: any) => {
      this.projectArray = data;
      console.log(data);
    });
  }

  onClick(data: any) {
    this.status = data;
    console.log(this.status)
  }
}
