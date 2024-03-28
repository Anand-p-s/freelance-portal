import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-piechartcategory',
  templateUrl: './piechartcategory.component.html',
  styleUrls: ['./piechartcategory.component.scss'],
})
export class PiechartcategoryComponent {
  public catageoryArray: any;

  public chart!: any;
  @ViewChild('myChart') myChart!: ElementRef;

  constructor(private db: DbserviceService) {}

  ngAfterViewInit(): void {
    this.db.categoryReport().then((data: any) => {
      this.catageoryArray = data;
      this.createChart();
    });
  }

  createChart() {
    const chartData = {
      labels: this.catageoryArray.map((item: { categoryname: any; }) => item.categoryname),
      datasets: [
        {
          data: this.catageoryArray.map((item: { count_of_requests: any; }) => item.count_of_requests),
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
          ],
        },
      ],
    };
    this.chart = new Chart(this.myChart.nativeElement, {
      type: 'pie',
      data: chartData,
      options: { aspectRatio: 2.5 },
    });
  }
}
