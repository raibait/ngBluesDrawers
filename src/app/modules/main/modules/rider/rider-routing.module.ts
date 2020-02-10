import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiderComponent } from './components/rider/rider.component'

const routes: Routes = [
  {
    path: '',
    component: RiderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiderRoutingModule { }
