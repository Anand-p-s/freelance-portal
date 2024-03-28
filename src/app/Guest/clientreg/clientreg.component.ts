import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-clientreg',
  templateUrl: './clientreg.component.html',
  styleUrls: ['./clientreg.component.scss'],
})
export class ClientregComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: any;
  message = '';
  ClientRegForm!: FormGroup;
  validationstatus = null;

  public districtArray: any[] = [];
  public locationArray: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService
  ) {}

  ngOnInit(): void {
    this.ClientRegForm = this.fb.group({
      districtid: ['', [Validators.required]],
      name: [
        '',
        [Validators.required, Validators.pattern(/^[A-Z][a-zA-z\s\w]*$/)],
      ],
      licenseno: ['', [Validators.required]],
      EMAIL: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}$')]],
      locationid: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      username: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]{4,18}$'),
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)],
      ],
    });

    this.ClientRegForm.patchValue({
      districtid: 0,
      locationid: 0,
    });

    // const storedDistrictData = localStorage.getItem('districtData')
    // console.log(storedDistrictData)

    // if (storedDistrictData) {
    //   this.districtArray = JSON.parse(storedDistrictData)
    // } else {
    this.db.districtview().then((data: any) => {
      this.districtArray = data;
      // localStorage.setItem('districtData', JSON.stringify(data))
    });
    // }
  }

  OnChange() {
    console.log('onchange called');
    const id = this.ClientRegForm.value.districtid;
    console.log(id);

    this.db.getlocation({ id }).then((data: any) => {
      this.locationArray = data;
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
    this.ClientRegForm.value.logo = this.currentFile.name;

    this.db.companyReg(this.ClientRegForm.value).then((confirmation: any) => {
      if (confirmation.message == 'Success') {
        alert('Registered Successfully!');
        this.router.navigate(['guestmaster/guesthome']);
      } else if (confirmation.message == 'Exist') {
        alert('Username already exist');
        this.router.navigate(['guestmaster/clientreg']);
      } else {
        alert('Failed!');
        this.router.navigate(['guestmaster/guesthome']);
      }
    });
  }
}
