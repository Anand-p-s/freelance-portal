import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-rejectview',
  templateUrl: './rejectview.component.html',
  styleUrls: ['./rejectview.component.scss']
})
export class RejectviewComponent {

  public rejectViewForm!: FormGroup
  public reqid: any

  constructor(private db: DbserviceService, private fb: FormBuilder, route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.reqid = Params.get('id')
    })
  }

  ngOnInit() {
    this.rejectViewForm = this.fb.group({
      rejectreason: []
    })

    const reqid = this.reqid
    this.db.remarkView({reqid}).then((data: any) => {
      console.log(data)

      this.rejectViewForm.setValue({
        rejectreason: data[0].req_review
      })
    })
  }
}
