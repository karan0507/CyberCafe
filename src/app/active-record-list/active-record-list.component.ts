import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-active-record-list',
  templateUrl: './active-record-list.component.html',
  styleUrls: ['./active-record-list.component.scss']
})
export class ActiveRecordListComponent implements OnInit {

  todayDate: Date = new Date();
  aid;  // Active Id
  searchText;
  srNo = 'Sr.no';
  index = 1;
  Name = 'Name';
  addr = 'Address';
  phone = 'Phone No';
  email = 'Email Address';
  balance = 'Balance';
  starttime = 'Start Time';
  prevbal = 'Previous Balance';
  currbal = 'Current Amount';
  payable = 'Payable Balance';
  selecteduser: Array<any>;
  pay = 'Pay Now';
  rate = 20;
  hrs;
  delUser: Array<any>;

  // transaction = {
  //   type: 'type',
  //   debit_bal: 1000,
  //   credit_bal: 0,
  //   bal: 0 - 1000,
  //   cid: 5
  // };

  // custTran: Array<any>;
  customers: Array<any>;
  currentamt = this.rate * 1;
  paidamt: any;


  constructor(private db: DatabaseServiceService) { }

  ngOnInit() {
    // this.getCustomers();
    // this.getTransCust();
    this.getActiveUsers();
  }

  onKey(event: any) { // without type info

  }

  onSelect(selectedItem: any) {
    this.selecteduser = selectedItem;
    this.aid = selectedItem.active_id;
    console.log('Selected item Id: ', selectedItem ); // You get the Id of the selected item here
  }

  getCustomers() {
    this.db.getAllActiveUsers().subscribe(data => {
      console.log(data);
      this.customers = data;

    });

  }

  addTransaction() {
    console.log(this.selecteduser + this.currbal + this.paidamt);
    console.log('component transaction called');
    this.db.addTransaction(this.selecteduser);

    // const httpParams = new HttpParams().set('id', );
    // const options = { params: httpParams };

    this.db.deleteActicveUser(this.aid).subscribe(res => {
      console.log(res);
      this.getCustomers();
    });
  }


  getTransCust() {
    this.db.getCustTran().subscribe(res => {
      console.log(res);
      this.customers = res;
    });
  }


  getActiveUsers() {
    this.db.getAllActiveUsers().subscribe(res => {
      this.customers = res;
    });
  }
}
