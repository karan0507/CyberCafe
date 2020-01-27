import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MonthlyComponent } from './monthly.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'monthly',
    component: MonthlyComponent
  }
];

@NgModule({
  declarations: [MonthlyComponent],
  imports: [
    Ng2SearchPipeModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MonthlyModule { }
