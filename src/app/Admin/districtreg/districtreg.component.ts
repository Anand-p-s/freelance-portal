import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-districtreg',
  templateUrl: './districtreg.component.html',
  styleUrls: ['./districtreg.component.scss'],
})
export class DistrictregComponent {
  validationstatus = null;
  DistrictRegForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService
  ) {}

  ngOnInit() {
    this.DistrictRegForm = this.fb.group({
      district: ['', [Validators.required]],
    });
  }

  OnSubmit() {
    if (this.DistrictRegForm.valid) {
      this.db
        .districtreg(this.DistrictRegForm.value)
        .then((confirmation: any) => {
          if (confirmation.message == 'Success') {
            alert('Registered successfully');
            this.router.navigate(['adminmaster/districtview']);
          } else {
            alert('already exists');            
          }
        });
    } else {
      this.validationstatus = true; // Show error message
    }
  }
}
