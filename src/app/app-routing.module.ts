import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  { path:'',
  loadChildren:()=>import('./pages/pages.module')
  .then(m=>PagesModule),
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
