import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';

const routes: Routes = [
  { path: '', component: GenreListComponent },
  { path: 'detail/:id', component: GenreDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreRoutingModule { }
