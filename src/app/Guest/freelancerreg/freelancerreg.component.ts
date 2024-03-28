import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-freelancerreg',
  templateUrl: './freelancerreg.component.html',
  styleUrls: ['./freelancerreg.component.scss'],
})
export class FreelancerregComponent {
  selectedFiles?: FileList;
  currentFile?: any;
  message = '';
  FreelancerRegForm!: FormGroup;
  validationstatus = null;

  public districtArray: any[] = [];
  public locationArray: any[] = [];
  public categoryArray: any[] = [];
  public SubcategoryArray: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService
  ) {}

  ngOnInit(): void {
    this.FreelancerRegForm = this.fb.group({
      districtid: ['', [Validators.required]],
      name: [
        '',
        [Validators.required, Validators.pattern(/^[A-Z][a-zA-z\s\w]*$/)],
      ],
      EMAIL: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}$')]],
      locationid: ['', [Validators.required]],
      categoryid: ['', [Validators.required]],
      subcategoryid: ['', [Validators.required]],
      image: ['', [Validators.required]],
      username: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]{4,18}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/),
        ],
      ],
    });

    this.db.districtview().then((data: any) => {
      this.districtArray = data;
    });

    this.db.categoryView().then((data: any) => {
      this.categoryArray = data;
    });
  }

  OnChangeDistrict() {
    const id = this.FreelancerRegForm.value.districtid;
    this.db.getlocation({ id }).then((data: any) => {
      this.locationArray = data;
    });
  }

  OnChangeCategory() {
    const id = this.FreelancerRegForm.value.categoryid;
    this.db.getSubcategory({ id }).then((data: any) => {
      this.SubcategoryArray = data;
    });
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  OnSubmit() {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;

        this.db.upload(this.currentFile).subscribe((event: any) => {
          this.message = event.body.message;
        });
      }
    }
    this.FreelancerRegForm.value.image = this.currentFile.name;

    this.db
      .freelancerReg(this.FreelancerRegForm.value)
      .then((confirmation: any) => {
        if (confirmation.message == 'Success') {
          alert('Registered Successfully!');
          this.router.navigate(['guestmaster/login']);
        } else if (confirmation.message == 'Exist') {
          alert('Username already exist');
          this.router.navigate(['guestmaster/freelancerreg']);
        } else {
          alert('Failed!');
          this.router.navigate(['guestmaster/freelancerreg']);
        }
      });
  }
}
