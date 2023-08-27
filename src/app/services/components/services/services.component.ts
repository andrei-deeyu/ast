import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  isLoggedIn = false;
  isAdmin = false;
  editing = false;

  saved_services_info = localStorage.getItem('services')
  img: string | ArrayBuffer | null = null;
  servicesDesc = 'Waiting for the admin to write something on this page...';

  ngOnInit() {
    if(localStorage.getItem('token')) this.isLoggedIn = true;
    if(localStorage.getItem('token') === 'admintoken') {
      this.isAdmin = true;
      this.servicesDesc = 'Write something on this page';
    } else {
      this.servicesDesc = 'Waiting for the admin to write something on this page...'
    }


    if(this.saved_services_info) {
      this.img = JSON.parse(this.saved_services_info).img;
      this.servicesDesc = JSON.parse(this.saved_services_info).desc
    }
  }

  toggleEditing() {
    this.editing = !this.editing;
    if(this.editing && this.servicesDesc == 'Write something on this page') {
      this.servicesDesc = '';
    }
  }

  selectFile(event: any) {
    let file = event.target.files[0];

    if(!file.type.startsWith('image')) return;

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => this.img = reader.result;
  }

  putService() {
    localStorage.setItem('services', JSON.stringify({
      img: this.img,
      desc: this.servicesDesc
    }));
    this.editing = false;
  }
}
