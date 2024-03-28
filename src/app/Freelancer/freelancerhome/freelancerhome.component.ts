import { Component } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-freelancerhome',
  templateUrl: './freelancerhome.component.html',
  styleUrls: ['./freelancerhome.component.scss']
})
export class FreelancerhomeComponent {
  workDataArray: any[]=[]

  constructor(private db: DbserviceService){ }

  ngOnInit(){
    const storedLoginId = localStorage.getItem('loginid')

    this.db.getJobFreelancer({storedLoginId}).then((data: any)=>{
      this.workDataArray = data
    })
  }
}
