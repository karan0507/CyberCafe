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
  number;
  keyword = 'name';
  newcust: Array<any>;
  activeGroup: FormGroup;
  addUser: FormGroup;
  transaction;
  options = ['UPI', 'PAYTM', 'CASH', ' उधारी | BORROWED', 'BANK TRANSFER', 'पैशे'];
  tid: any;
  selectedUser: Array<any>;
  data: any;

  constructor(private db: DatabaseServiceService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.activeGroup = this.fb.group(
      { name: ['', [Validators.required]] });


    // ! changed variable name to username for addUser formGroup
    this.addUser = this.fb.group(
      {
        currentamt: ['', [Validators.required]],
        paidamt: ['', [Validators.required]],
        remark: ['', [Validators.required]]
      });


    this.getAllUser();
  }

  ngOnInit() {

    this.getActiveUsers();
    this.getCustomers();
    this.cust = this.route.snapshot.data.user;
    console.log(this.cust);
  }






  // onSelect retreives the selected item from the table and stores it as an object to be used.
  onSelect(selectedItem: any) {
    this.selecteduser = selectedItem;
    // this.aid = this.selectedUser.aid;
    // const date = 'date2';
    // this.selecteduser[date] = new Date();
    console.log('Selected item useer: ', selectedItem);
    // You get the Id of the selected item here

  }

  getCustomers() {
    this.db.getAllActiveUsers().subscribe(data => {
      console.log(data);
      this.customers = data;

    });

  }


  addTransaction() {
    // TODO Get values from modal box and save it in selecteduser or new object variable
    // this.selecteduser = this.transaction;
    // this.transaction['bal'] = 100;
    // this.transaction['credit_bal'] = 50;
    // this.transaction['type'] = 'UPI';
    // this.transaction['cid'] = this.selecteduser['cust_id'];
    console.log('component transaction called');
    // this.selecteduser['type'] = 100;
    // this.selecteduser['credit_bal'] = 10;
    // this.selecteduser['debit_bal'] = 0;
    // this.selecteduser['bal'] = 90;
    console.log(this.selecteduser);
    this.db.addTransaction(this.selecteduser).subscribe(res => {
      console.log(res);
      this.db.deleteActicveUser(this.aid).subscribe(res => {
        console.log(res);
        this.getCustomers();
      });
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
    // console.log('Selected item user: ', this.selectedUser);
    this.number = item.phone_no;
    this.bal = item.bal;
    this.tid = item.tid;
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


  // ? @Karan Make the required changes below
  // ! STOPED WORKING  STORY ID 178
  // addActiveUser() {
  //         // console.log(this.data);
          // this.db.addActiveUsers(this.data).subscribe(res2 => {
          //   this.getAllUser();
          //   this.getCustomers();
          //   console.log(res2);
  //         });

  //     }
  addActiveUser() {
    // this.db.getAllActiveUsers()
    //   .subscribe(res => {
    //     console.log(res);
    //     res.map(obj => {
    //       console.log(obj.tid);
          this.db.addActiveUsers(this.data).subscribe(res2 => {
            this.getAllUser();
            this.getCustomers();
            console.log(res2);
          });

        // });
      // });
  }
}