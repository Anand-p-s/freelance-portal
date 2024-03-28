import { Component } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-companyverification',
  templateUrl: './companyverification.component.html',
  styleUrls: ['./companyverification.component.scss'],
})
export class CompanyverificationComponent {
  public companyArray: any;

  constructor(private db: DbserviceService) {}

  ngOnInit() {
    const status = 'pending';

    this.db.getClient({ status }).then((data: any) => {
      this.companyArray = data;
    });
  }

  onClick(data: any) {
    const status = data;

    this.db.getClient({ status }).then((data: any) => {
      this.companyArray = data;
    });
  }

  verify(data: any) {
    if (confirm('Are you sure you want to verify?')) {
      const status = 'accepted';
      const id = data;

      this.db.updateClientStatus({ status, id }).then((data: any) => {
        if (data.message == 'Success') {
          alert('Verified seccefully');
          window.location.reload();
        }
      });
    }
  }

  reject(data: any) {
    if (confirm('Are you sure you want to reject?')) {
      const status = 'rejected';
      const id = data;

      this.db.updateClientStatus({ status, id }).then((data: any) => {
        if (data.message == 'Success') {
          alert('Rejected seccefully');
          window.location.reload();
        }
      });
    }
  }
}
