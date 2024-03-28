import { Component } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-clientprofile',
  templateUrl: './clientprofile.component.html',
  styleUrls: ['./clientprofile.component.scss'],
})
export class ClientprofileComponent {
  public clientArray: any;

  constructor(private db: DbserviceService) {}

  ngOnInit() {
    const loginid = localStorage.getItem('loginid');

    this.db.getClientDetails({ loginid }).then((data: any) => {
      this.clientArray = data;
    });
  }
}
