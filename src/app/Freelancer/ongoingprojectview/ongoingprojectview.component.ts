import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-ongoingprojectview',
  templateUrl: './ongoingprojectview.component.html',
  styleUrls: ['./ongoingprojectview.component.scss'],
})
export class OngoingprojectviewComponent {
  workDataArray: any[] = [];
  reqid: any;
  progressDataArray: any[] = [];
  validationstatus = null;

  public progressUpdateForm!: FormGroup;

  constructor(
    private router: Router,
    private db: DbserviceService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.reqid = Params.get('id');
    });
  }

  ngOnInit(): void {
    this.progressUpdateForm = this.fb.group({
      percentage: [
        '',
        [Validators.required, Validators.pattern(/^(100|[1-9][0-9]?)$/)],
      ],
      progress_desc: ['', [Validators.required]],
      requestid: this.reqid,
    });

    const reqid = this.reqid;
    this.db.getWorkByReqID({ reqid }).then((data: any) => {
      this.workDataArray = data;
    });

    const requestid = this.reqid;
    this.db.getProgressById({ requestid }).then((data: any) => {
      this.progressDataArray = data;
      console.log(data);
    });
  }

  updateProgress() {
    this.db
      .updateWorkProgress(this.progressUpdateForm.value)
      .then((data: any) => {
        if (data.message == 'Success') {
          alert('progress updated');
          this.router.navigate(['/freelancermaster/projects']);
        } else {
          alert('failed to update');
        }
      });
  }
}
