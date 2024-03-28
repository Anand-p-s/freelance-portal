import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-clientchangepwd',
  templateUrl: './clientchangepwd.component.html',
  styleUrls: ['./clientchangepwd.component.scss'],
})
export class ClientchangepwdComponent {
  public changePasswordForm!: FormGroup;
  validationstatus = null;

  constructor(
    private db: DbserviceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: [
        '',
        [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)],
      ],
      confirmPassword: ['', [Validators.required]],
      loginid: localStorage.getItem('loginid'),
    });
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      const newpwd = this.changePasswordForm.value.newPassword;
      const confirmpwd = this.changePasswordForm.value.confirmPassword;

      if (newpwd == confirmpwd) {
        this.db
          .changePassword(this.changePasswordForm.value)
          .then((data: any) => {
            if (data.message == 'Success') {
              alert('password changed');
              this.router.navigate(['/clientmaster/clientprofile']);
            } else if (data.message == 'wrong') {
              alert('wrong current password');
            }
          });
      } else {
        alert('recheck the typed password');
      }
    }
  }
}
