import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-workdetails',
  templateUrl: './workdetails.component.html',
  styleUrls: ['./workdetails.component.scss']
})
export class WorkdetailsComponent {
  workDataArray: any[] = []
  workId: any

  constructor(private db: DbserviceService, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.workId = Params.get('id')
    })
  }

  ngOnInit():void {
    const id = this.workId
    this.db.getWorkById({ id }).then((data: any)=>{
      this.workDataArray=data
    })
  }
}
