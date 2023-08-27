import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoggedIn = false;

  constructor(public router: Router, private authService: AuthServiceService) {
  }

  ngOnInit() {
    if(localStorage.getItem('token')) this.isLoggedIn = true;

    this.authService.loginEvent.subscribe(event => {
      if(event === 'logged in') {
        if(localStorage.getItem('token')) this.isLoggedIn = true;
      }
    })
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate([''])
  }
}
