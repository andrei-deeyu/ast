import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    private http: HttpClient,
    private router: Router
  ) {}

  signup() {
    this.http.post('/api/signup', {
      username: this.username,
      password: this.password,
      admin: this.admin
    }).subscribe(res => {
      console.log(res);
      this.alertMessage = 'Signed up successfully';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000);
    })
  }
}
