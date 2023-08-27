import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'services',
        component: ServicesComponent,
      }
    ])
  ]
})
export class ServicesModule { }
