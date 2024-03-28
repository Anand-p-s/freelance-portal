import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-categoryedit',
  templateUrl: './categoryedit.component.html',
  styleUrls: ['./categoryedit.component.scss'],
})
export class CategoryeditComponent {
  CategoryEditForm!: FormGroup;
  categoryid: any;
  public categoryArray: any;
  selectedFiles?: FileList;
  currentFile?: any;
  message = '';
  validationstatus

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private db: DbserviceService
  ) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.categoryid = Params.get('id');
    });
  }

  ngOnInit() {
    this.CategoryEditForm = this.fb.group({
      categoryid: ['', Validators.required],
      category: ['', Validators.required],
      categoryimage: ['', Validators.required],
    });

    const id = this.categoryid;
    this.db.getCategoryById({ id }).then((data: any) => {
      this.categoryArray = data;

      this.CategoryEditForm.setValue({
        categoryid: this.categoryArray[0].categoryid,
        category: this.categoryArray[0].categoryname,
        categoryimage: this.categoryArray[0].categoryimage,
      });
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    this.imageupload();
  }

  imageupload() {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;
        this.db.upload(this.currentFile).subscribe((event: any) => {
          this.message = event.body.message;
        });
      }
      this.CategoryEditForm.value.categoryimage = this.currentFile.name;
    }
  }

  OnSubmit() {
    if (this.CategoryEditForm.valid) {
      if (!this.CategoryEditForm.value.categoryimage) {
        const data = {
          categoryid: this.CategoryEditForm.value.categoryid,
          category: this.CategoryEditForm.value.category,
          categoryimage: this.categoryArray[0].categoryimage,
        };

        this.db.categoryEdit(data).then((confirmation: any) => {
          if (confirmation.message == 'Success') {
            alert('Updated');
            this.router.navigate(['adminmaster/categoryview']);
          } else {
            alert('Failed to update');
            this.router.navigate(['adminmaster/categoryview']);
          }
        });
      } else {
        this.db
          .categoryEdit(this.CategoryEditForm.value)
          .then((confirmation: any) => {
            if (confirmation.message == 'Success') {
              alert('Updated');
              this.router.navigate(['adminmaster/categoryview']);
            } else {
              alert('Failed to update');
              this.router.navigate(['adminmaster/categoryview']);
            }
          });
      }
    }
  }
}
