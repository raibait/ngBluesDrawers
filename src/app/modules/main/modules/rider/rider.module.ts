import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiderComponent } from './components/rider/rider.component';
import { RiderRoutingModule } from './rider-routing.module';

@NgModule({
  declarations: [RiderComponent],
  imports: [
    CommonModule,
    RiderRoutingModule,
  ]
})
export class RiderModule { }
