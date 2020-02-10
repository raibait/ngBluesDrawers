import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcertsComponent } from './components/concerts/concerts.component';
import { ConcertsRoutingModule } from './concerts-routing.module';

@NgModule({
  declarations: [ConcertsComponent],
  imports: [
    CommonModule,
    ConcertsRoutingModule,
  ],
})
export class ConcertsModule { }
