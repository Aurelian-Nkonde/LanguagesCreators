import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { LanguagesComponent } from './components/languages/languages.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DeleteComponent } from './components/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    LanguagesComponent,
    AboutComponent,
    HeaderComponent,
    NotFoundComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
