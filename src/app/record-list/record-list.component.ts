import { Component, OnInit, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { CommonModule } from '@angular/common';
import { DatabaseServiceService } from '../database-service.service';




@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss']
})
export class RecordListComponent implements OnInit {
  searchText;
  Sr_no = 'Sr.no';
  index = 1;
  Name = 'Name';
  addr = 'Address';
  phone = 'Phone_No';
  email = 'Email Address';
  balance = 'Balance';


  customers: Array<any>;

  constructor(private db: DatabaseServiceService) { }

 ngOnInit() {
   this.getCustomers();
  }

  onKey(event: any) { // without type info

  }


  getCustomers() {
    this.db.getCustomerWithLastTransaction().subscribe(
      res => {
        this.customers = res;
        console.log(res);
      });
  }


}
