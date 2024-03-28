import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-districtview',
  templateUrl: './districtview.component.html',
  styleUrls: ['./districtview.component.scss'],
})
export class DistrictviewComponent {
  districtArray: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService
  ) {}

  ngOnInit() {
    this.db.districtview().then((data: any) => {
      this.districtArray = data;
    });
  }

  DistrictDelete(id: any) {
    if (confirm('Do you want to delete?')) {
      this.db.districtDelete({ id }).then((confirmation: any) => {
        if (confirmation.message == 'Success') {
          alert('deleted.');
          this.router.navigate(['adminmaster/districtview']);
          this.ngOnInit();
        } else {
          alert('Failed to delete');
          this.router.navigate(['adminmaster/districtview']);
        }
      });
    }
  }
}
