import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LanguagesComponent } from './components/languages/languages.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path: 'languages', component: LanguagesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '', redirectTo: '/languages', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
