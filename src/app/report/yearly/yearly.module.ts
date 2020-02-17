import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearlyComponent } from './yearly.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'yearly',
    component: YearlyComponent
  }
];

@NgModule({
  declarations: [YearlyComponent],
  imports: [
    Ng2SearchPipeModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class YearlyModule { }
