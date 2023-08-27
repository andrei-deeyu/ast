import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'contact', component: ContactComponent }
    ])
  ]
})
export class ContactModule { }
