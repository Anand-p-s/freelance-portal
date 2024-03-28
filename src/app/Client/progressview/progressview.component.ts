import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-progressview',
  templateUrl: './progressview.component.html',
  styleUrls: ['./progressview.component.scss'],
})
export class ProgressviewComponent {
  progressDataArray: any[] = [];
  workDataArray: any[] = [];
  workId: any;
  reqId: any;

  constructor(private db: DbserviceService, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.workId = Params.get('workid');
      this.reqId = Params.get('reqid');
    });
  }

  ngOnInit(): void {
    const id = this.workId;

    this.db.getWorkById({ id }).then((data: any) => {
      this.workDataArray = data;
    });

    const requestid = this.reqId;
    this.db.getProgressById({ requestid }).then((data: any) => {
      this.progressDataArray = data;
      console.log(data);
    });
  }
}
