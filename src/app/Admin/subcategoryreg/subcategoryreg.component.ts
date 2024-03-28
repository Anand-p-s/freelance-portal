import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-subcategoryreg',
  templateUrl: './subcategoryreg.component.html',
  styleUrls: ['./subcategoryreg.component.scss'],
})
export class SubcategoryregComponent {
  public categorydata: any[] = [];
  SubCategoryRegForm!: FormGroup;
  validationstatus = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService
  ) {}

  ngOnInit(): void {
    this.SubCategoryRegForm = this.fb.group({
      subcategory: ['', Validators.required],
      category: ['', Validators.required],
    });

    this.db.categoryView().then((data: any) => {
      this.categorydata = data;
      console.log(this.categorydata);
    });
  }

  OnSubmit() {
    if (this.SubCategoryRegForm.valid) {
      this.db
        .subcategoryReg(this.SubCategoryRegForm.value)
        .then((confirmation: any) => {
          if (confirmation.message == 'Success') {
            alert('Sub Category registered successfully');
            this.router.navigate(['/adminmaster/subcategoryreg']);
          } else {
            alert('Failed');
            this.router.navigate(['/adminmaster/subcategoryreg']);
          }
        });
    }
  }
}
