import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-freelancerworkview',
  templateUrl: './freelancerworkview.component.html',
  styleUrls: ['./freelancerworkview.component.scss']
})
export class FreelancerworkviewComponent {
  workDataArray: any[]=[]

  constructor(private db: DbserviceService){ }

  ngOnInit(){
    const storedLoginId = localStorage.getItem('loginid')

    this.db.getJobFreelancer({storedLoginId}).then((data: any)=>{
      this.workDataArray = data
    })
  }
}
