import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-clienthome',
  templateUrl: './clienthome.component.html',
  styleUrls: ['./clienthome.component.scss']
})
export class ClienthomeComponent {
  public workDataArray: any

  constructor(private fb: FormBuilder, private router: Router, private db: DbserviceService) { }

  ngOnInit(){
    const storedLoginId = localStorage.getItem('loginid')

    this.db.getWorkDetails({storedLoginId}).then((data:any)=>{
      this.workDataArray = data
      console.log(data)
    })
  }
}
