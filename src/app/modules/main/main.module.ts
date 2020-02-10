import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [MainComponent, NavbarComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
})
export class MainModule { }
