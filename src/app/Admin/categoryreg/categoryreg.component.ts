import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-categoryreg',
  templateUrl: './categoryreg.component.html',
  styleUrls: ['./categoryreg.component.scss'],
})
export class CategoryregComponent {
  selectedFiles?: FileList;
  currentFile?: any;
  fileInfo?: Observable<any>;
  message = '';
  CategoryRegForm!: FormGroup;
  validationstatus = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService
  ) {}

  ngOnInit(): void {
    this.CategoryRegForm = this.fb.group({
      category: ['', Validators.required],
      categoryimage: ['', Validators.required],
    });
  }

  selectFile(event: any): void {
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

    this.CategoryRegForm.value.categoryimage = this.currentFile.name;

    this.db
      .categoryreg(this.CategoryRegForm.value)
      .then((confirmation: any) => {
        if (confirmation.message == 'Success') {
          alert('Category registered successfully.');
          this.router.navigate(['/adminmaster/categoryreg']);
        } else {
          alert('failed');
          this.router.navigate(['adminmaster/categoryreg']);
        }
      });
  }
}
