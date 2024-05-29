import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongsDetailComponent } from './songs-detail/songs-detail.component';

const routes: Routes = [
  { path: '', component: SongsListComponent },
  { path: 'detail/:id', component: SongsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
