import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss'],
})
export class ForgotpwdComponent {
  public forgotPWDForm!: FormGroup;

  constructor(
    private db: DbserviceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.forgotPWDForm = this.fb.group({
      username: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.db.forgotPWD(this.forgotPWDForm.value).then((data: any) => {
      if (data.message == 'Success') {
        alert('Password reset check your email');
        this.router.navigate(['/guestmaster/login']);
      } else if (data.message == 'Wrong') {
        alert('invalid username');
      } else {
        alert('failed');
      }
    });
  }
}
