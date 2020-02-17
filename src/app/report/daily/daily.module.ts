import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyComponent } from './daily.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ExportAsModule } from 'ngx-export-as';
import { MyCustomFilterPipePipe } from 'src/app/my-custom-filter-pipe.pipe';

const routes: Routes = [
  {
    path: 'daily',
    component: DailyComponent
  }
];


@NgModule({
  declarations: [DailyComponent, MyCustomFilterPipePipe],
  imports: [
    Ng2SearchPipeModule,
    FormsModule,
    ExportAsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DailyModule { }
