import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  isLoggedIn = false;

  ngOnInit() {
    if(localStorage.getItem('token')) this.isLoggedIn = true;
  }
}
