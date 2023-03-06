import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AlbumsComponent} from './components/albums/albums.component';
import {AlbumDetailComponent} from './components/album-detail/album-detail.component';
import {AlbumPhotosComponent} from './components/album-photos/album-photos.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {GlobalErrorComponent} from './components/global-error/global-error.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent,
    GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
