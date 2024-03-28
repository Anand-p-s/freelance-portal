import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-locationview',
  templateUrl: './locationview.component.html',
  styleUrls: ['./locationview.component.scss'],
})
export class LocationviewComponent implements OnInit {
  public districtdata: any[] = [];
  public locationdata: any[] = [];
  LocationViewForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService
  ) {}

  ngOnInit(): void {
    this.LocationViewForm = this.fb.group({
      districtid: [''],
    });

    this.db.districtview().then((data: any) => {
      this.districtdata = data;
    });
  }

  OnChange() {
    const id = this.LocationViewForm.value.districtid;
    this.db.getlocation({ id }).then((data: any) => {
      this.locationdata = data;
      console.log(this.locationdata);
    });
  }

  locationDelete(id: any) {
    if (confirm('Do you want to delete?')) {
      this.db.locationDelete({ id }).then((confirmation: any) => {
        if (confirmation.message == 'Success') {
          alert('Location deleted.');
          this.router.navigate(['adminmaster/locationview']);
          this.OnChange();
        } else {
          alert('Failed to delete');
          this.router.navigate(['adminmaster/locationview']);
        }
      });
    }
  }
}
