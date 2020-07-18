import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        loadChildren: () => import('./modules/concerts/concerts.module').then((m) => m.ConcertsModule),
        path: '',
        pathMatch: 'full',
      },
      {
        loadChildren: () => import('./modules/history/history.module').then((m) => m.HistoryModule),
        path: 'news',
      },
      {
        loadChildren: () => import('./modules/team/team.module').then((m) => m.TeamModule),
        path: 'team',
      },
      {
        loadChildren: () => import('./modules/concerts/concerts.module').then((m) => m.ConcertsModule),
        path: 'concerts',
      },
      {
        loadChildren: () => import('./modules/gallery/gallery.module').then((m) => m.GalleryModule),
        path: 'gallery',
      },
      {
        loadChildren: () => import('./modules/music/music.module').then((m) => m.MusicModule),
        path: 'music',
      },
      {
        loadChildren: () => import('./modules/video/video.module').then((m) => m.VideoModule),
        path: 'video',
      },
      {
        loadChildren: () => import('./modules/lyrics/lyrics.module').then((m) => m.LyricsModule),
        path: 'lyrics',
      },
      {
        loadChildren: () => import('./modules/rider/rider.module').then((m) => m.RiderModule),
        path: 'rider',
      },
      {
        loadChildren: () => import('./modules/contact/contact.module').then((m) => m.ContactModule),
        path: 'contact',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
