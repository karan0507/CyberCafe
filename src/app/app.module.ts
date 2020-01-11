import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
// import { server } from '../assets/server.js';
import { from } from 'rxjs';
import { DatabaseServiceService } from './database-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActiveRecordComponent } from './active-record/active-record.component';
import { ActiveRecordModule } from './active-record/active-record.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { RecordListComponent } from './record-list/record-list.component';
import { RecordListModule } from './record-list/record-list.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  entryComponents: [
    LoginComponent
  ],
  imports: [
    RecordListModule,
    ActiveRecordModule,
    RegisterModule,
    HttpClientModule,
    LoginModule,
    HomeModule,
    HeaderModule,
    FormsModule,
    SidenavModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [DatabaseServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
