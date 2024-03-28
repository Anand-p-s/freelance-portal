import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-workpost',
  templateUrl: './workpost.component.html',
  styleUrls: ['./workpost.component.scss'],
})
export class WorkpostComponent {
  WorkPostForm!: FormGroup;
  validationstatus = null;
  minDate: string;

  public categoryArray: any[] = [];
  public SubcategoryArray: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService
  ) {
    this.categoryArray = [];
  }

  ngOnInit() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    this.minDate = `${yyyy}-${mm}-${dd}`;

    this.WorkPostForm = this.fb.group({
      loginid: localStorage.getItem('loginid'),
      title: ['', [Validators.required]],
      categoryid: ['', [Validators.required]],
      subcategoryid: ['', [Validators.required]],
      description: ['', [Validators.required]],
      budget: ['', [Validators.required, Validators.pattern('\\d+')]],
      deadlinedate: ['', [Validators.required]],
    });

    this.WorkPostForm.patchValue({
      categoryid: 0,
      subcategoryid: 0,
    });

    this.db
      .categoryView()
      .then((data: any) => {
        console.log(data);
        this.categoryArray = data;
      })
      .catch((error: any) => {
        console.error('Error fetching category data:', error);
      });
  }

  OnChange() {
    const id = this.WorkPostForm.value.categoryid;

    this.db.getSubcategory({ id }).then((data: any) => {
      this.SubcategoryArray = data;
    });
  }

  OnSubmit() {
    if (this.WorkPostForm.valid) {
      this.db.workPost(this.WorkPostForm.value).then((confirmation: any) => {
        if (confirmation.message == 'Success') {
          alert('Work Posted');
          this.router.navigate(['/clientmaster/clienthome']);
        } else {
          alert('Failed');
          this.router.navigate(['/clientmaster/clienthome']);
        }
      });
    }
  }
}
