import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-viewrequests',
  templateUrl: './viewrequests.component.html',
  styleUrls: ['./viewrequests.component.scss'],
})
export class ViewrequestsComponent {
  public freelancerArray: any;
  public workid: any;
  public reqid: any;

  constructor(
    private router: Router,
    private db: DbserviceService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.workid = params.get('id');
      console.log(this.workid);
    });
  }

  ngOnInit() {
    const workid = this.workid;
    const status = 'pending';
    this.db.getFreelancerByReq({ workid, status }).then((data: any) => {
      this.freelancerArray = data;
      this.reqid = data[0].requestid;
    });
  }

  downloadPdf(data: any) {
    if (data && data.biodata) {
      console.log('download clicked');
      const pdfUrl = `https://freelanceportalbackend.onrender.com/images/${data.biodata}`;
      const filename = data.biodata.split('/').pop();
      this.http.get(pdfUrl, { responseType: 'blob' }).subscribe(
        (response) => {
          saveAs(response, filename);
          alert(`${filename} downloaded`);
        },
        (error) => {
          console.error('Error downloading the PDF file', error);
        }
      );
    } else {
      console.warn('Invalid data for PDF download');
    }
  }

  accept() {
    const reqid = this.reqid;
    const status = 'accepted';

    if (confirm('Are you sure you want to accept?')) {
      this.db.updateReqStatus({ reqid, status }).then((confirmation: any) => {
        if (confirmation.message == 'updated') {
          alert('Successfully accepted');
          window.location.reload();
        } else {
          alert('failed');
        }
      });
    }
  }

  reject(data: any) {
    const reqid = data;

    if (confirm('do you want to reject?')) {
      this.router.navigate(['/clientmaster/rejectreason', reqid]);
    }
  }

  onClick(data: any) {
    const workid = this.workid;
    const status = data;

    if (data == 'all') {
      this.db.getFreelancerByWorkId({ workid }).then((data: any) => {
        this.freelancerArray = data;
      });
    } else {
      this.db.getFreelancerByReq({ workid, status }).then((data: any) => {
        this.freelancerArray = data;
      });
    }
  }
}
