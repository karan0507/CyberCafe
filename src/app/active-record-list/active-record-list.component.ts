import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';

@Component({
  selector: 'app-active-record-list',
  templateUrl: './active-record-list.component.html',
  styleUrls: ['./active-record-list.component.scss']
})
export class ActiveRecordListComponent implements OnInit {

  todayDate: Date = new Date();

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
  currbal = 'Current Balance';
  payable = 'Payable Balance';
  selecteduser: Array<any>;
  pay = 'Pay Now';
  rate;

  transaction = {
    type: 'type',
    debit_bal: 1000,
    credit_bal: 0,
    bal: 0 - 1000,
    cid: 5
  };

  // custTran: Array<any>;
  customers: Array<any>;

  constructor(private db: DatabaseServiceService) { }

 ngOnInit() {
  // this.getCustomers();
   this.getTransCust();
  }

  onKey(event: any) { // without type info

  }

  onSelect(selectedItem: any) {
    this.selecteduser = selectedItem;
    console.log("Selected item Id: ", selectedItem ); // You get the Id of the selected item here
}

  getCustomers() {
    this.db.listAllCustomers().subscribe(data => {
    console.log(data);
    this.customers = data;

  });

  }

  addTransaction() {
    console.log('component transaction called');
    this.db.addTransaction(this.transaction);
  }

  getTransCust() {
    this.db.getCustTran().subscribe(res => {
      console.log(res);
      this.customers = res;
    });
  }
}
