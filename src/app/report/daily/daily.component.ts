import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/database-service.service';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';

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
  Name = 'Name';
  addr = 'Address';
  phone = 'Phone_No';
  email = 'Email Address';
  balance = 'Balance';

  total = 'Total';
  currcash = 'आजची कॅश  | Credited Cash';
  remark = 'remark';
  date: Date = new Date();
  options = ['UPI', 'PAYTM', 'CASH' , 'BORROWED' , 'BANK TRANSFER'];
  customers: Array<any>;
  public selectedValues$: Subject<string> = new Subject();
  constructor(private db: DatabaseServiceService, private exportAsService: ExportAsService) { }

 ngOnInit() {
  //  this.getCustomers();
  this.getCustomerDetailsWithBalance();
  }

  onKey(event: any) { // without type info

  }

  onChange(selectedValue) {
    this.selectedValues$.next(selectedValue);
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
      this.db.getCustomerWithLastTransaction().subscribe(
        res => {
          this.customers = res;
          console.log(res);
        });
    }
}
