import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordListComponent } from './record-list.component';
import { HeaderModule } from '../header/header.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'records',
    component: RecordListComponent
  }
];

@NgModule({
  declarations: [RecordListComponent],
  imports: [
    Ng2SearchPipeModule,
    FormsModule,
    HeaderModule,
    SidenavModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RecordListModule { }
