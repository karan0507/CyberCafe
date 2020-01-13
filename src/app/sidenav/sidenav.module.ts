import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidenavComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
