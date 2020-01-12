import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseServiceService } from '../database-service.service';


@Component({
  selector: 'app-active-record',
  templateUrl: './active-record.component.html',
  styleUrls: ['./active-record.component.scss']
})
export class ActiveRecordComponent implements OnInit {
  formControlValue = '';
  users: Array<any>;
  name: Array<any> = ['hello', 'yash', 'where', 'is', 'your', 'office', 'sejal', 'also', 'works', 'there', 'kya?'];

  profileForm = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
    email: new FormControl('')
  });

  customers: Array<any>;
  constructor(private db: DatabaseServiceService) {

    this.getAllUser();
  }

  ngOnInit() {
    console.log(this.users);
  }


  getAllUser() {
    this.db.listAllCustomers().subscribe(data => {
      console.log(data);
      this.customers = data;
    });
  }

  findChoices(searchText: string) {
    console.log(this.users);
    return this.users.filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  getChoiceLabel(choice: string) {
    return `${choice} `;
  }
}
