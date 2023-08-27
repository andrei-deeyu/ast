import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../core/services/authGuard';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'contact',
        component: ContactComponent,
      }
    ])
  ]
})
export class ContactModule { }
