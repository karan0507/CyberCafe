import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { DatabaseServiceService } from './database-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActiveRecordModule } from './active-record/active-record.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { RecordListModule } from './record-list/record-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActiveRecordListModule } from './active-record-list/active-record-list.module';
import { DailyModule } from './report/daily/daily.module';
import { MonthlyComponent } from './report/monthly/monthly.component';
import { MonthlyModule } from './report/monthly/monthly.module';
import { YearlyModule } from './report/yearly/yearly.module';
import { MyCustomFilterPipePipe } from './my-custom-filter-pipe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent

  ],
  entryComponents: [
    LoginComponent
  ],
  imports: [
    ActiveRecordListModule,
    MonthlyModule,
    YearlyModule,
    RecordListModule,
    ActiveRecordModule,
    DailyModule,
    RegisterModule,
    HttpClientModule,
    LoginModule,
    HomeModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    SidenavModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [DatabaseServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
