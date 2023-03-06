import {RouterModule, Routes} from "@angular/router";
import {NgModule} from '@angular/core'
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {AlbumsComponent} from "./components/albums/albums.component";
import {AlbumDetailComponent} from "./components/album-detail/album-detail.component";
import {AlbumPhotosComponent} from "./components/album-photos/album-photos.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'albums/:id', component: AlbumDetailComponent},
  {path: 'albums/:id/photos', component: AlbumPhotosComponent},
  {path : 'albums', component: AlbumsComponent}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
