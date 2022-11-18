import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGenreComponent } from './pages/list-genre/list-genre.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { ListArtistComponent } from './pages/list-artist/list-artist.component';
import { ListMusicComponent } from './pages/list-music/list-music.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGenreComponent,
    LayoutComponent,
    ListArtistComponent,
    ListMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
