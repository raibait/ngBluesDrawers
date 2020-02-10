import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule),
    path: '',
  },
  {
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
    path: 'admin',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
