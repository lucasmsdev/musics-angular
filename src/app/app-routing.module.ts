import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListMusicComponent } from './pages/list-music/list-music.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children:[
    {path: '', component: ListMusicComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
