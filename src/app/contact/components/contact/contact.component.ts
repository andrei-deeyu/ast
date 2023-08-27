import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isLoggedIn = false;
  isAdmin = false;
  editing = false;

  saved_contact_info = localStorage.getItem('contact')
  img: string | ArrayBuffer | null = null;
  contactDesc = '';

  ngOnInit() {
    if(localStorage.getItem('token')) this.isLoggedIn = true;
    if(localStorage.getItem('token') === 'admintoken') {
      this.isAdmin = true;
      this.contactDesc = 'Write something on this page';
    } else {
      this.contactDesc = 'Waiting for the admin to write something on this page...'
    }


    if(this.saved_contact_info) {
      this.img = JSON.parse(this.saved_contact_info).img;
      this.contactDesc = JSON.parse(this.saved_contact_info).desc
    }
  }

  toggleEditing() {
    this.editing = !this.editing;
    if(this.editing && this.contactDesc == 'Write something on this page') {
      this.contactDesc = '';
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
    localStorage.setItem('contact', JSON.stringify({
      img: this.img,
      desc: this.contactDesc
    }));
    this.editing = false;
  }
}
