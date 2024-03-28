import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-workedit',
  templateUrl: './workedit.component.html',
  styleUrls: ['./workedit.component.scss'],
})
export class WorkeditComponent {
  public WorkEditForm!: FormGroup;
  public categoryArray: any;
  public SubcategoryArray: any;
  public minDate: any;
  public workid: any;
  public workDataArray: any;

  constructor(
    private route: ActivatedRoute,
    private db: DbserviceService,
    private fb: FormBuilder,
    private router: Router
  ) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.workid = params.get('id');
    });
  }

  ngOnInit() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    this.minDate = `${yyyy}-${mm}-${dd}`;

    this.WorkEditForm = this.fb.group({
      workid: this.workid,
      title: ['', [Validators.required]],
      categoryid: ['', [Validators.required]],
      subcategoryid: ['', [Validators.required]],
      description: ['', [Validators.required]],
      budget: ['', [Validators.required, Validators.pattern('\\d+')]],
      deadlinedate: ['', [Validators.required]],
    });

    const id = this.workid;
    this.db.getWorkById({ id }).then((data: any) => {
      // this.workDataArray = data;
      this.WorkEditForm.patchValue({
        title: data[0].title,
        categoryid: data[0].categoryid,
        subcategoryid: data[0].subcategoryid,
        description: data[0].description,
        budget: data[0].cost,
        deadlinedate: data[0].deadlinedate,
      });
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
    const id = this.WorkEditForm.value.categoryid;

    this.db.getSubcategory({ id }).then((data: any) => {
      this.SubcategoryArray = data;
    });
  }

  OnSubmit() {
    if (this.WorkEditForm.valid) {
      this.db.workEdit(this.WorkEditForm.value).then((data: any) => {
        if (data.message == 'Success') {
          alert('Details updated');
          this.router.navigate(['/clientmaster/viewworks']);
        } else {
          alert('Failed to update');
        }
      });
    }
  }  
}
