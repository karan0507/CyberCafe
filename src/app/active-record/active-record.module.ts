import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveRecordComponent } from './active-record.component';
import { Routes, RouterModule } from '@angular/router';
import { SidenavModule } from '../sidenav/sidenav.module';
import { HeaderModule } from '../header/header.module';
import { ReactiveFormsModule } from '@angular/forms';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';


const routes: Routes = [
  {
    path: 'entries',
    component: ActiveRecordComponent
  }
];

@NgModule({
  declarations: [ActiveRecordComponent],
  imports: [
    AutocompleteLibModule,
    ReactiveFormsModule,
    HeaderModule,
    SidenavModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ActiveRecordComponent]
})
export class ActiveRecordModule { }
