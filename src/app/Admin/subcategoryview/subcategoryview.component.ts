import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-subcategoryview',
  templateUrl: './subcategoryview.component.html',
  styleUrls: ['./subcategoryview.component.scss'],
})
export class SubcategoryviewComponent {
  public categoryArray: any[] = [];
  public subcategoryArray: any[] = [];
  SubcategoryViewForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService
  ) {}

  ngOnInit(): void {
    this.SubcategoryViewForm = this.fb.group({
      categoryid: [''],
    });

    this.db.categoryView().then((data: any) => {
      this.categoryArray = data;
    });
  }

  OnChange() {
    const id = this.SubcategoryViewForm.value.categoryid;

    this.db.getSubcategory({ id }).then((data: any) => {
      this.subcategoryArray = data;
    });
  }

  subcategoryDelete(id: any) {
    if (confirm('Do you want to delete?')) {
      console.log(id);
      this.db.subcategoryDelete({ id }).then((confirmation: any) => {
        if (confirmation.message == 'Success') {
          alert('Deleted.');
          this.router.navigate(['adminmaster/subcategoryview']);
          this.OnChange();
        } else {
          alert('Failed to delete');
          this.router.navigate(['adminmaster/subcategoryview']);
        }
      });
    }
  }
}
