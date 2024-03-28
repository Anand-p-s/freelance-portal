import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-locationreg',
  templateUrl: './locationreg.component.html',
  styleUrls: ['./locationreg.component.scss'],
})
export class LocationregComponent {
  public districtdata: any[] = [];
  LocationRegForm!: FormGroup;
  validationstatus = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService
  ) {}

  ngOnInit(): void {
    this.LocationRegForm = this.fb.group({
      districtid: ['', [Validators.required]],
      location: ['', [Validators.required]],
    });

    this.db.districtview().then((data: any) => {
      this.districtdata = data;
      console.log(this.districtdata);
    });
  }
  OnSubmit() {
    if (this.LocationRegForm.valid) {
      this.db
        .locationreg(this.LocationRegForm.value)
        .then((confirmation: any) => {
          if (confirmation.message == 'Success') {
            alert('Registered Successfully');
            this.router.navigate(['adminmaster/locationview']);
          } else {
            alert('already exists');
          }
        });
    }    
  }
}
