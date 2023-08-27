import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  alertMessage = '';
  username = '';
  password = '';

  constructor(private service: AuthServiceService) {}

  login() {
    this.service.login(this.username, this.password)
    .subscribe(res => {
      if(!res) this.alertMessage = 'user not found';
    });
  }
}
