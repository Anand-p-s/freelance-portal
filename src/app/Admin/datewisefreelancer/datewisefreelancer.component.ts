import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-datewisefreelancer',
  templateUrl: './datewisefreelancer.component.html',
  styleUrls: ['./datewisefreelancer.component.scss'],
})
export class DatewisefreelancerComponent {
  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef;
  title = 'Excel';
  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Freelancerdetails.xlsx');
  }

  public freelancerDateWise!: any;
  public freelancerArray: any;
  constructor(private db: DbserviceService, private fb: FormBuilder) {}

  ngOnInit() {
    this.freelancerDateWise = this.fb.group({
      startdate: [''],
      enddate: [''],
    });
  }

  onSubmit() {
    this.db.freelancerReport(this.freelancerDateWise.value).then((data: any) => {
      this.freelancerArray = data;
    });
  }
}
