import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryListComponent } from './country-list/country-list.component';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { CountryNewComponent } from './country-new/country-new.component';

const routes: Routes = [
  { path: 'country', component: CountryListComponent },
  { path: 'country/edit/:id', component: CountryEditComponent },
  { path: 'country/new', component: CountryNewComponent },
  { path: '', redirectTo: 'country' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
