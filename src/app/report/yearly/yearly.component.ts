import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yearly',
  templateUrl: './yearly.component.html',
  styleUrls: ['./yearly.component.scss']
})
export class YearlyComponent implements OnInit {

  searchText;
  srno = 'Sr.no';
  index = 1;
  Name = 'Name';
  addr = 'Address';
  phone = 'Phone_No';
  email = 'Email Address';
  balance = 'Balance';
  constructor() { }

  ngOnInit() {
  }

}
