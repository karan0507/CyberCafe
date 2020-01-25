import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/database-service.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {
  searchText;
  srno = 'Sr.no';
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
    this.db.listAllCustomers().subscribe(data => {
    console.log(data);
    this.customers = data;

  });

  }

}
