import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-districtedit',
  templateUrl: './districtedit.component.html',
  styleUrls: ['./districtedit.component.scss'],
})
export class DistricteditComponent {
  DistrictEditForm!: FormGroup;
  districtid: any;
  DistrictdataArray: any;
  validationstatus = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.districtid = params.get('id');
    });
  }

  ngOnInit() {
    this.DistrictEditForm = this.fb.group({
      districtid: [],
      district: ['', Validators.required],
    });

    const id = this.districtid;
    this.db.getDistrictById({ id }).then((data: any) => {
      this.DistrictdataArray = data;
      this.DistrictEditForm.setValue({
        districtid: data[0].districtid,
        district: data[0].district,
      });
    });
  }

  OnSubmit() {
    if (this.DistrictEditForm.valid) {
      this.db
        .districtEdit(this.DistrictEditForm.value)
        .then((confirmation: any) => {
          if (confirmation.message == 'Success') {
            alert('Updated');
            this.router.navigate(['adminmaster/districtview']);
          } else {
            alert('Failed to Update');
            this.router.navigate(['adminmaster/districtview']);
          }
        });
    }
  }
}
