import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public LoginArray: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dbservice: DbserviceService
  ) {}

  LoginFormGroup = this.fb.group({
    username: [''],
    password: [''],
  });

  OnSubmit() {
    // console.log(this.LoginFormGroup.value)
    this.dbservice.login(this.LoginFormGroup.value).then((data: any) => {
      this.LoginArray = data;
      // console.log(data)
      if (data == '') {
        alert('invalid username/password');
        this.router.navigate(['/guestmaster/Login']);
        return;
      } else {
        // console.log(this.LoginArray)
        var role = this.LoginArray[0].role;
        var status = this.LoginArray[0].status;
        // console.log(role)
        localStorage.setItem('loginid', this.LoginArray[0].loginid);
        localStorage.setItem('username', this.LoginArray[0].username);
        // var status = this.LoginArray[0].status;
        // console.log(status)
        if (role == 'admin') {
          this.router.navigate(['/adminmaster/adminhome']);
        } else if (role == 'client' && status == 'accepted') {
          this.router.navigate(['/clientmaster/clienthome']);
        } else if (role == 'freelancer') {
          this.router.navigate(['/freelancermaster/freelancerhome']);
        } else {
          alert('Not Authorized!');
        }
      }
    });
  }
  // alert('success')
  ngOnInit(): void {}
}
