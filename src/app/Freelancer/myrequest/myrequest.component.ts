import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-myrequest',
  templateUrl: './myrequest.component.html',
  styleUrls: ['./myrequest.component.scss'],
})
export class MyrequestComponent {
  public requestArray: any;
  public status: any = 'all';

  constructor(private db: DbserviceService, private router: Router) {}

  ngOnInit() {
    const id = localStorage.getItem('loginid');
    // const id=this.loginid
    console.log(id);

    this.db.getReqById({ id }).then((data: any) => {
      this.requestArray = data;
      console.log(data);
    });
  }

  onClick(data: any) {
    if (data) {
      this.status = data;
      console.log(this.status)
    }
  }

  reqDelete(id: any) {
    if (id) {
      if (confirm('Do you want to remove the request')) {
        const reqid = id;
        this.db.workReqDelete({ reqid }).then((confirmation: any) => {
          if (confirmation.message == 'Success') {
            alert('Deleted');
            window.location.reload();
          } else {
            alert('failed');
          }
        });
      }
    }
  }
}
