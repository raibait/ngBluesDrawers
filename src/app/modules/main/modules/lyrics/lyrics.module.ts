import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyricsComponent } from './components/lyrics/lyrics.component';
import { LyricsRoutingModule } from './lyrics-routing.module';

@NgModule({
  declarations: [LyricsComponent],
  imports: [
    CommonModule,
    LyricsRoutingModule,
  ]
})
export class LyricsModule { }
