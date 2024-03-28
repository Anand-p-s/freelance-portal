import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-workreq',
  templateUrl: './workreq.component.html',
  styleUrls: ['./workreq.component.scss']
})
export class WorkreqComponent {
  WorkReqForm!: FormGroup
  selectedFiles?: FileList;
  currentFile?: any;
  fileInfo?: Observable<any>;
  message = '';

  public workreqArray: any
  public workid: any

  constructor(private fb: FormBuilder, private router: Router, private db: DbserviceService, route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.workid = Params.get('id')
    })
  }

  ngOnInit() {
    this.WorkReqForm = this.fb.group({
      workid: this.workid,
      name: [],
      biodata: [],
      freelancerid: [],
      loginid: localStorage.getItem('loginid')
    })

    const loginid = localStorage.getItem('loginid')

    this.db.getFreelancerById({ loginid }).then((data: any) => {
      this.workreqArray = data

      this.WorkReqForm.patchValue({
        name: data[0].freelancername
      })
    })

  }

  OnSubmit() {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file

        this.db.upload(this.currentFile).subscribe((event: any) => {
          this.message = event.body.message;
        });
      }

      this.WorkReqForm.value.biodata = this.currentFile.name;

      this.db.workReq(this.WorkReqForm.value).then((confirmation: any) => {
        if (confirmation.message == 'Success') {
          alert('Request Send')
          this.router.navigate(['/freelancermaster/freelancerhome'])
        } else if (confirmation.message == 'exist') {
          alert('Already applied')
          this.router.navigate(['/freelancermaster/freelancerhome'])
        } else {
          alert('Request failed')
        }
      })
    }
  }
  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }
}

