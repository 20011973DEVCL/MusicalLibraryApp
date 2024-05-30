import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';

import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryNewComponent } from './country-new/country-new.component';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
  declarations: [
    CountryListComponent,
    CountryDetailComponent,
    CountryNewComponent,
    CountryEditComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    MaterialModule
  ]
})
export class CountryModule { }
