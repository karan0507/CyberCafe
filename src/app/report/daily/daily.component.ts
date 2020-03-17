import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/database-service.service';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  exportAsConfig: ExportAsConfig = {
    type: 'xls', // the type you want to download
    elementId: 'dayreports', // the id of html/table element
  };

  exportAsConfigpdf: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementId: 'dayreports', // the id of html/table element
  };
  dropdown: FormControl;
  searchText;
  srno = 'Sr.no';
  index = 1;
  name = 'Name';
  addr = 'Address';
  phone = 'Phone No';
  email = 'Email Address';
  // balance = 'Balance';
  type = 'Type of Payment';
  total = 'Total';
  balance = 'आजची कॅश  | Credited Cash';
  remark = 'remark';
  date = moment();

  tomorrow = moment(new Date(), 'DD/MM/YYYY').add(1, 'day');
  // tomorrow = Date.now() + Date.now();
  dayparam;
 // tomorrow = this.date + new Date().getDate();
  // tomorrow =  new Date().getDate() + 1 ;
  options = ['UPI', 'PAYTM', 'CASH' , ' उधारी | BORROWED' , 'BANK TRANSFER', 'उधारी जमा', 'पैशे'];
  customers: Array<any>;
  public selectedValues$: Subject<string> = new Subject();
  constructor(private db: DatabaseServiceService, private exportAsService: ExportAsService) { }

 ngOnInit() {
  //  this.getCustomers();
  this.getCustomerDetailsWithBalance();
  // this.tomorrow.setDate(this.tomorrow.getDate() + 1);

  this.dayparam = { date: this.date.toDate().toISOString(), date2: this.tomorrow.toDate().toISOString() };
  console.log(this.dayparam);
  }

  onKey(event: any) { // without type info

  }

  onChange(selectedValue) {
    this.selectedValues$.next(selectedValue);
    console.log(selectedValue.target.value);
    this.getCustomerDetailsWithBalance();
  }

  // getCustomers() {
  //   this.db.listAllCustomers().subscribe(data => {
  //   console.log(data);
  //   this.customers = data;

  // });

  // }
   export() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, 'My File Name').subscribe(() => {
      // save started
    });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    // this.exportAsService.get(this.config).subscribe(content => {
    //   console.log(content);
    // });
  }
  exportpdf() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfigpdf, 'My File Name').subscribe(() => {
      // save started
    });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    // this.exportAsService.get(this.config).subscribe(content => {
    //   console.log(content);
    // });
  }
 
  getCustomerDetailsWithBalance() {
      this.db.getCustTran(this.dayparam).subscribe(
        res => {
          this.customers = res;
          console.log(res);
        });
    }
}
