import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  clientDataArray: any
  workDataArray: any
  workid: any
  reqid: any
  amount: any

  constructor(private db: DbserviceService, private route: ActivatedRoute, private router: Router) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.workid = params.get('workid');
      this.reqid = params.get('reqid')
    })
  }

  ngOnInit() {
    const loginid = localStorage.getItem('loginid')
    this.db.getClientDetails({ loginid }).then((data: any) => {
      this.clientDataArray = data
    })

    const id = this.workid
    this.db.getWorkById({id}).then((data: any)=>{
      this.workDataArray = data
      this.amount = data[0].cost
      console.log(data)
    })
  }

  onClick(){
    const amount = this.amount
    const requestid = this.reqid

    this.db.payment({amount, requestid}).then((data: any)=>{
      if (data.message == 'Success') {
        alert('Payment Successfull')
        this.router.navigate(['/clientmaster/clienthome'])
      } else {
        alert('Failed')
      }
    })
  }
}
