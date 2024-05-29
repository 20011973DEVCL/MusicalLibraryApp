import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandsingerRoutingModule } from './bandsinger-routing.module';
import { BandsingerListComponent } from './bandsinger-list/bandsinger-list.component';
import { BandsingerDetailComponent } from './bandsinger-detail/bandsinger-detail.component';


@NgModule({
  declarations: [
    BandsingerListComponent,
    BandsingerDetailComponent
  ],
  imports: [
    CommonModule,
    BandsingerRoutingModule
  ]
})
export class BandsingerModule { }
