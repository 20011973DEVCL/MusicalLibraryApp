import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'country', loadChildren: () => import('./country/country.module').then(m => m.CountryModule) },
      { path: 'genre', loadChildren: () => import('./genre/genre.module').then(m => m.GenreModule) },
      { path: 'album', loadChildren: () => import('./album/album.module').then(m => m.AlbumModule) },
      { path: 'bandsinger', loadChildren: () => import('./bandsinger/bandsinger.module').then(m => m.BandsingerModule) },
      { path: 'songs', loadChildren: () => import('./songs/songs.module').then(m => m.SongsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
