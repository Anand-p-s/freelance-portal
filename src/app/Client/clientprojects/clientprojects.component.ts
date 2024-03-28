import { Component } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-clientprojects',
  templateUrl: './clientprojects.component.html',
  styleUrls: ['./clientprojects.component.scss']
})
export class ClientprojectsComponent {
  public projectArray: any
  constructor(private db: DbserviceService) { }

  ngOnInit() {
    const loginid = localStorage.getItem('loginid')
    const status = 'accepted'
    this.db.getWorkByStatus({ loginid, status }).then((data: any) => {
      this.projectArray = data
      console.log(data)
    })
  }

  onClick(data: any){
    let status = data
    let loginid = localStorage.getItem('loginid')

    this.db.getWorkByStatus({status, loginid}).then((data: any)=>{
      this.projectArray=data
    })
  }
}
