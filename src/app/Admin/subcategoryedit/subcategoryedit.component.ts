import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-subcategoryedit',
  templateUrl: './subcategoryedit.component.html',
  styleUrls: ['./subcategoryedit.component.scss'],
})
export class SubcategoryeditComponent {
  public categoryArray: any;
  subcategoryid: any;
  SubcategoryEditForm!: FormGroup;
  validationstatus = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.subcategoryid = params.get('id');
      console.log(this.subcategoryid);
    });
  }

  ngOnInit() {
    this.SubcategoryEditForm = this.fb.group({
      categoryid: ['', Validators.required],
      subcategoryname: ['', Validators.required],
      subcategoryid: ['', Validators.required],
    });

    const id = this.subcategoryid;
    this.db.getSubcategoryById({ id }).then((data: any) => {
      this.categoryArray = data;
      this.SubcategoryEditForm.setValue({
        categoryid: data[0].categoryid,
        subcategoryname: data[0].subcategory,
        subcategoryid: data[0].subcategoryid,
      });
      console.log(data);
    });

    this.db.categoryView().then((data: any) => {
      this.categoryArray = data;
      console.log(data);
    });
  }

  OnSubmit() {
    if (this.SubcategoryEditForm.valid) {
      this.db
        .subcategoryEdit(this.SubcategoryEditForm.value)
        .then((confirmation: any) => {
          if (confirmation.message == 'Success') {
            alert('Updated');
            this.router.navigate(['adminmaster/subcategoryview']);
          } else {
            alert('failed');
            this.router.navigate(['adminmaster/subcategoryview']);
          }
        });
    }
  }
}
