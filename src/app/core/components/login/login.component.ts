import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  alertMessage = '';
  username = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {
    this.http.post('/api/login', {
      username: this.username,
      password: this.password
    }).subscribe(( res:any ) => {
      if(!res) return this.alertMessage = 'user not found';

      localStorage.setItem('token', res.token);
      return this.router.navigate([''])
    })
  }
}
