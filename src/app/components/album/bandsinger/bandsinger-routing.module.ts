import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandsingerListComponent } from './bandsinger-list/bandsinger-list.component';
import { BandsingerDetailComponent } from './bandsinger-detail/bandsinger-detail.component';

const routes: Routes = [
  { path: '', component: BandsingerListComponent },
  { path: 'detail/:id', component: BandsingerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandsingerRoutingModule { }
