import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

import { ActiveRecordListComponent } from './active-record-list.component';
import { ActiveResolve } from '../active-resolve';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ActiveRecordListComponent,
    resolve: {user: ActiveResolve}
  }
];

 4
@NgModule({
  declarations: [ActiveRecordListComponent],
  imports: [
    Ng2SearchPipeModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [ActiveResolve]
})
export class ActiveRecordListModule { }
