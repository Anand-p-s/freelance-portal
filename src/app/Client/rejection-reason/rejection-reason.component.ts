import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-rejection-reason',
  templateUrl: './rejection-reason.component.html',
  styleUrls: ['./rejection-reason.component.scss']
})
export class RejectionReasonComponent {

  public reqid: any
  public rejectForm!: FormGroup

  constructor(private router: Router, private db: DbserviceService, private route: ActivatedRoute, private fb: FormBuilder) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.reqid = params.get('id');
      console.log(this.reqid);
    })
  }

  ngOnInit() {
    this.rejectForm = this.fb.group({
      rejectreason: [],
      reqid: this.reqid,
      status: 'rejected'
    })
  }

  onSubmit(): void {
    console.log('submitted')
    console.log(this.rejectForm.value)
    
    this.db.updateReqReview(this.rejectForm.value).then((confirmation: any) => {
      if (confirmation.message == 'Success') {
        alert('Rejected')
        this.router.navigate(['/clientmaster/workreqview'])
      } else {
        alert('Failed to reject')
      }
    })
  }
}
