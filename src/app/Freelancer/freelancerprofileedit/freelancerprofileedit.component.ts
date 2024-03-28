import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-freelancerprofileedit',
  templateUrl: './freelancerprofileedit.component.html',
  styleUrls: ['./freelancerprofileedit.component.scss'],
})
export class FreelancerprofileeditComponent {
  FreelancerEditForm!: FormGroup;
  districtArray: any;
  locationArray: any;
  categoryArray: any;
  subcategoryArray: any;

  validationstatus = null;

  constructor(
    private db: DbserviceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.FreelancerEditForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern(/^[A-Z][a-zA-z\s\w]*$/)],
      ],
      EMAIL: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern, Validators.pattern('[0-9]{10}$')]],
      districtid: ['', [Validators.required]],
      locationid: ['', [Validators.required]],
      categoryid: ['', [Validators.required]],
      subcategoryid: ['', [Validators.required]],
      loginid: localStorage.getItem('loginid'),
    });

    this.db.districtview().then((data: any) => {
      this.districtArray = data;
      this.onChangeDistrict();
    });

    this.db.categoryView().then((data: any) => {
      this.categoryArray = data;
      this.OnChangeCategory();
    });

    const loginid = localStorage.getItem('loginid');
    this.db.getFreelancerById({ loginid }).then((data: any) => {
      this.FreelancerEditForm.patchValue({
        name: data[0].freelancername,
        EMAIL: data[0].email,
        phone: data[0].phone,
        districtid: data[0].districtid,
        locationid: data[0].locationid,
        subcategoryid: data[0].subcategoryid,
        categoryid: data[0].categoryid,
      });
    });
  }

  onChangeDistrict() {
    const id = this.FreelancerEditForm.value.districtid;
    this.db.getlocation({ id }).then((data: any) => {
      this.locationArray = data;
      console.log(data);
    });
  }

  OnChangeCategory() {
    const id = this.FreelancerEditForm.value.categoryid;
    this.db.getSubcategory({ id }).then((data: any) => {
      this.subcategoryArray = data;
    });
  }

  onSubmit() {
    if (this.FreelancerEditForm.valid) {
      if (confirm('Do you want to save the changes?')) {
        this.db
          .freelancerProfileEdit(this.FreelancerEditForm.value)
          .then((data: any) => {
            if (data.message == 'Success') {
              alert('Changes Saved');
              this.router.navigate(['/freelancermaster/profile']);
            } else {
              alert('Failed');
            }
          });
      }
    }
  }

  cancel() {
    this.router.navigate(['/freelancermaster/profile']);
  }
}
