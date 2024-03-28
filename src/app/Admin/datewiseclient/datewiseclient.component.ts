import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-datewiseclient',
  templateUrl: './datewiseclient.component.html',
  styleUrls: ['./datewiseclient.component.scss'],
})
export class DatewiseclientComponent {
  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef;
  title = 'Excel';
  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Clientdetails.xlsx');
  }

  public clientDateWise!: any;
  public clientArray: any;
  constructor(private db: DbserviceService, private fb: FormBuilder) {}

  ngOnInit() {
    this.clientDateWise = this.fb.group({
      startdate: [''],
      enddate: [''],
    });
  }

  onSubmit() {
    this.db.clientReport(this.clientDateWise.value).then((data: any) => {
      this.clientArray = data;
    });
  }
}
