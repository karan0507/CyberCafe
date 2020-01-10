import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordListComponent } from './record-list.component';
import { HeaderModule } from '../header/header.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'records',
    component: RecordListComponent
  }
];

@NgModule({
  declarations: [RecordListComponent],
  imports: [
    HeaderModule,
    SidenavModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RecordListModule { }
