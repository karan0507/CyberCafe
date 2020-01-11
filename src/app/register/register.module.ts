import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [

  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    HeaderModule,
    SidenavModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }
