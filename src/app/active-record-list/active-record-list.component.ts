import { Component, OnInit, SimpleChange, OnChanges, SimpleChanges, Input, Output } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
import { HttpParams } from '@angular/common/http';
import { interval, Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-active-record-list',
  templateUrl: './active-record-list.component.html',
  styleUrls: ['./active-record-list.component.scss']
})
export class ActiveRecordListComponent implements OnInit {
  bal: any;


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
  livetime = 'End Time';
  prevbal = 'Previous Balance';
  currbal = 'Current Amount';
  payable = 'Payable Balance';
  selecteduser: Array<any>;
  pay = 'Pay Now';
  rate;
  hrs;
  delUser: Array<any>;
  customers: Array<any>;
  currentamt: number;
  payableamt: number;
  cust;
  // payableamt = this.currbal - this.prevbal;
  paidamt;
  // paidamt: any = new Observable(sub => {
  //   sub.next(this.currentamt);
  // });
  mysqlDate: Date;
  @Output()
  now;
  custDate = 'date';
  selectedUser: Array<any>;
  number;
  keyword = 'name';
  newcust: Array<any>;
  activeGroup: FormGroup;
  options = ['UPI', 'PAYTM', 'CASH' , ' उधारी | BORROWED' , 'BANK TRANSFER', 'पैशे'];

  constructor(private db: DatabaseServiceService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.activeGroup = this.fb.group(
      { amt: ['', [Validators.required]] });

    this.getAllUser();
  }

  ngOnInit() {
    // this.getCustomers();
    // this.getTransCust();
    this.getActiveUsers();
    this.call();
    this.cust = this.route.snapshot.data.user;
    console.log(this.cust);
    this.getDateFromUser();
    // const timediff = Math.abs(this.now.getTime() - this.mysqlDate.getTime()) / 36e5;
    // console.log(timediff);
    // console.log(this.mysqlDate);
  }



  getDateFromUser() {
    const cust2 = of(this.cust);
    cust2.subscribe(res => {
      res.map(res2 => {
        console.log(res2.date);
        this.mysqlDate = new Date(res2.date);
        console.log(this.mysqlDate);
      });
    });
  }

  call() {
    setInterval(this.timeUpdate, 1000);
  }

  // updateBal() {
  //   this.payableamt.subscribe({
  //     next(x) { console.log('got value ' + x); },
  //     error(err) { console.error('something wrong occurred: ' + err); },
  //     complete() { console.log('done'); }
  //   });
  //   console.log('just after subscribe');
  // }

  timeUpdate() {
    return this.now = new Date();
  }


  onKey(event: any) { // without type info

  }

  // onSelect retreives the selected item from the table and stores it as an object to be used.
  onSelect(selectedItem: any) {
    this.selecteduser = selectedItem;
    this.aid = selectedItem.active_id;
    const date = 'date2';
    this.selecteduser[date] = new Date();
    console.log('Selected item Id: ', selectedItem); // You get the Id of the selected item here
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
      console.log(res);
      this.customers = res;
    });
  }


  selectEvent(item) {
    this.selectedUser = item;
    console.log('Selected item Id: ', item);
    this.number = item.phone_no;
    this.bal = item.bal;
    //  this.address = item.address;
    this.getAllUser();
    // You get the Id of the selected item here
  }



  getAllUser() {
    this.db.getCustomerWithLastTransaction().subscribe(data => {
      console.log(data);
      this.newcust = data;
    });
  }

  addActiveUser() {
    this.db.getAllActiveUsers().subscribe(res => {
      console.log(res);
      res.map(obj => {

        console.log(obj.id);
        const objarray: Array<any> = obj.id;
        if (this.selectedUser['cust_id'] === objarray) {
          console.log('Already exists');
        } else {
          console.log('doesnt not exists');

          console.log('Active User added');
          this.db.addActiveUsers(this.selectedUser).subscribe(res2 => {
            this.getAllUser();
            this.getCustomers();
            console.log(res2);
          });
        }
      });
      // console.log(this.selectedUser['cust_id']);

    });
    // this.date = new Date();


    // console.log('Active User added');
    // this.db.addActiveUsers(this.selectedUser).subscribe(res => {
    //   this.getAllUser();
    //   this.getCustomers();
    //   console.log(res);
    // });
  }
}
