import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-clientprofileedit',
  templateUrl: './clientprofileedit.component.html',
  styleUrls: ['./clientprofileedit.component.scss'],
})
export class ClientprofileeditComponent {
  ClientEditForm!: FormGroup;
  districtArray: any;
  locationArray: any;

  constructor(
    private db: DbserviceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.ClientEditForm = this.fb.group({
      name: [],
      EMAIL: [],
      phone: [],
      licenseno: [],
      districtid: [],
      locationid: [],
      loginid: localStorage.getItem('loginid'),
    });

    this.db.districtview().then((data: any) => {
      this.districtArray = data;
      this.onChange();
    });

    const loginid = localStorage.getItem('loginid');
    this.db.getClientDetails({ loginid }).then((data: any) => {
      this.ClientEditForm.patchValue({
        name: data[0].companyname,
        EMAIL: data[0].email,
        phone: data[0].phone,
        licenseno: data[0].licenseno,
        districtid: data[0].districtid,
        locationid: data[0].locationid,
      });
    });
  }

  onChange() {
    const id = this.ClientEditForm.value.districtid;
    this.db.getlocation({ id }).then((data: any) => {
      this.locationArray = data;
      console.log(data);
    });
  }

  onSubmit() {
    if (confirm('Do you want to save the changes?')) {
      this.db.clientProfileEdit(this.ClientEditForm.value).then((data: any) => {
        if (data.message == 'Success') {
          alert('Changes Saved');
          this.router.navigate(['/clientmaster/clientprofile']);
        } else {
          alert('Failed');
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/clientmaster/clientprofile']);
  }
}
