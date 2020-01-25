import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { RegisterModule } from './register/register.module';
import { ActiveRecordModule } from './active-record/active-record.module';
import { RecordListModule } from './record-list/record-list.module';
import { ActiveRecordListModule } from './active-record-list/active-record-list.module';
import { DailyComponent } from './report/daily/daily.component';
import { DailyModule } from './report/daily/daily.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeModule
  },
  {
    path: 'login',
    component: LoginModule
  },
  {
    path: 'register',
    component: RegisterModule
  },
  {
    path: 'entries',
    component: ActiveRecordModule
  },
  {
    path: 'customer',
    component: RecordListModule
  },
  {
    path: 'dashboard',
    component: ActiveRecordListModule
  },
  {
    path: 'daily',
    component: DailyModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
