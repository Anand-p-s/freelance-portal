import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editlocation',
  templateUrl: './editlocation.component.html',
  styleUrls: ['./editlocation.component.scss'],
})
export class EditlocationComponent {
  locationid: any;
  public DistrictdataArray: any;
  public locationarray: any;
  LocationEditForm!: FormGroup;
  validationstatus = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.locationid = params.get('id');
    });
  }

  ngOnInit(): void {
    this.LocationEditForm = this.fb.group({
      districtid: ['', Validators.required],
      locationid: [],
      locationname: ['', Validators.required],
    });

    const id = this.locationid;
    this.db.getlocationbyid({ id }).then((data: any) => {
      this.DistrictdataArray = data;
      this.LocationEditForm.setValue({
        districtid: data[0].districtid,
        locationname: data[0].location,
        locationid: data[0].locationid,
      });
    });

    this.db.districtview().then((data: any) => {
      this.DistrictdataArray = data;
    });
  }

  OnSubmit() {
    if (this.LocationEditForm.valid) {
      this.db
      .locationEdit(this.LocationEditForm.value)
      .then((confirmation: any) => {
        if (confirmation.message == 'Success') {
          alert('Updated');
          this.router.navigate(['adminmaster/locationview']);
        } else {
          alert('Failed to Update');
          this.router.navigate(['adminmaster/locationview']);
        }
      });
    }    
  }
}
