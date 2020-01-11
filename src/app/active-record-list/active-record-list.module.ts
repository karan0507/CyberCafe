import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { ActiveRecordListComponent } from './active-record-list.component';

const routes: Routes = [
  {
    path: 'activerecords',
    component: ActiveRecordListComponent
  }
];


@NgModule({
  declarations: [ActiveRecordListComponent],
  imports: [
    Ng2SearchPipeModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ActiveRecordListModule { }
