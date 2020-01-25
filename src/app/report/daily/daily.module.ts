import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyComponent } from './daily.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'daily',
    component: DailyComponent
  }
];


@NgModule({
  declarations: [DailyComponent],
  imports: [
    Ng2SearchPipeModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DailyModule { }
