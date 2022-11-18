import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListArtistComponent } from './pages/list-artist/list-artist.component';
import { ListGenreComponent } from './pages/list-genre/list-genre.component';
import { ListMusicComponent } from './pages/list-music/list-music.component';


const routes: Routes = [
  {path: '', component: LayoutComponent, children:[
    {path: '', component: ListGenreComponent},
    {path: 'artists', component: ListArtistComponent},
    {path: 'musics', component: ListMusicComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
