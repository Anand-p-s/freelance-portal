import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-categorywisefreelancer',
  templateUrl: './categorywisefreelancer.component.html',
  styleUrls: ['./categorywisefreelancer.component.scss'],
})
export class CategorywisefreelancerComponent {
  public freelancerCategoryWise!: FormGroup;
  public categorydata: any;
  public freelancerArray: any

  constructor(private db: DbserviceService, private fb: FormBuilder) {}

  ngOnInit() {
    console.log('ngonit')
    this.freelancerCategoryWise = this.fb.group({
      categoryid: ['']
    });

    this.db.categoryView().then((data: any) => {
      this.categorydata = data;
      console.log(this.categorydata);
    });
  }

  onSubmit(){
    this.db.freelancerCategoryWise(this.freelancerCategoryWise.value).then((data: any) => {
      this.freelancerArray = data
    })
  }

}
