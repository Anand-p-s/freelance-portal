import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.component.html',
  styleUrls: ['./categoryview.component.scss'],
})
export class CategoryviewComponent {
  public categoryArray: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService
  ) {}

  ngOnInit() {
    this.db.categoryView().then((data: any) => {
      this.categoryArray = data;
    });
  }

  categoryDelete(id: any) {
    if (confirm('Do you want to delete?')) {
      this.db.categoryDelete({ id }).then((confirmation: any) => {
        if (confirmation.message == 'Success') {
          alert('deleted');
          this.ngOnInit();
        } else {
          alert('failed to delete');
        }
      });
    }
  }
}
