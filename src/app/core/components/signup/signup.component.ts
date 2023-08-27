import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  alertMessage = '';
  username = '';
  password = '';
  admin = false;

  constructor(
    private service: AuthServiceService
  ) {}


  signup() {
    this.service.signup(this.username, this.password, this.admin)
    .subscribe(res => {
      if(res) this.alertMessage = 'Signed up successfully';
    })
  }
}
