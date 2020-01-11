import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';

@Component({
  selector: 'app-active-record-list',
  templateUrl: './active-record-list.component.html',
  styleUrls: ['./active-record-list.component.scss']
})
export class ActiveRecordListComponent implements OnInit {

  todayDate : Date = new Date();

  searchText;
  Sr_no = 'Sr.no';
  index = 1;
  Name = 'Name';
  addr = 'Address';
  phone = 'Phone No';
  email = 'Email Address';
  balance = 'Balance';
  starttime = 'Start Time';
  prevbal = 'Previous Balance';
  currbal = 'Current Balance';
  pay = 'Pay Now';
  rate;



  customers: Array<any>;

  constructor(private db: DatabaseServiceService) { }

 ngOnInit() {
   this.getCustomers();
  }

  onKey(event: any) { // without type info

  }


  getCustomers() {
    this.db.listAllCustomers().subscribe(data => {
    console.log(data);
    this.customers = data;

  });

  }

}
