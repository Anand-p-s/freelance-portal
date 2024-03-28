import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss'],
})
export class AdminhomeComponent {
  public catageoryArray: any;
  public paymentArray: any;

  public chart!: any;
  @ViewChild('myChart') myChart!: ElementRef;
  totalEarnings: any;

  constructor(private db: DbserviceService) {}

  ngOnInit() {
    this.db.paymentDetails().then((data: any) => {
      this.paymentArray = data;
      this.totalEarnings = data[0].total_earnings;
      console.log(data);      
    });
  }

  ngAfterViewInit(): void {
    this.db.categoryReport().then((data: any) => {
      this.catageoryArray = data;
      this.createChart();
    });
  }

  createChart() {
    const chartData = {
      labels: this.catageoryArray.map(
        (item: { categoryname: any }) => item.categoryname
      ),
      datasets: [
        {
          data: this.catageoryArray.map(
            (item: { count_of_requests: any }) => item.count_of_requests
          ),
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
          ],
        },
      ],
    };
    this.chart = new Chart(this.myChart.nativeElement, {
      type: 'bar',
      data: chartData,
      options: { aspectRatio: 2.5 },
    });
  }
}
