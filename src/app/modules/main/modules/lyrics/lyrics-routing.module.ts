import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LyricsComponent } from './components/lyrics/lyrics.component';

const routes: Routes = [
  {
    path: '',
    component: LyricsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LyricsRoutingModule { }
