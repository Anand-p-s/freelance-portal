import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-clientviewworks',
  templateUrl: './clientviewworks.component.html',
  styleUrls: ['./clientviewworks.component.scss'],
})
export class ClientviewworksComponent {
  workDataArray: any[] = [];
  workDetailsArray: any;

  constructor(private db: DbserviceService, private route: ActivatedRoute) {}

  ngOnInit() {
    const storedLoginId = localStorage.getItem('loginid');

    this.db.getWorkDetails({ storedLoginId }).then((data: any) => {
      this.workDataArray = data;
      console.log(data);
    });
  }

  learnMore(data: any) {
    const id = data;
    this.db.getWorkById({ id }).then((data: any) => {
      this.workDetailsArray = data;
    });
  }

  deleteWork(data: any) {
    if (confirm('Do you want to delete?')) {
      const workid = data;
      this.db.workDelete({ workid }).then((data: any) => {
        if (data.message == 'Success') {
          alert('Deleted');
          window.location.reload();
        } else {
          alert('failed to delete');
        }
      });
    }
  }
}
