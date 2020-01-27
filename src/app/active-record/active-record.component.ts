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
name: Array < any > = ['hello', 'yash', 'where', 'is', 'your', 'office', 'sejal', 'also', 'works', 'there', 'kya?'];

profileForm = new FormGroup({
  name: new FormControl(''),
  number: new FormControl(''),
  email: new FormControl('')
});

keyword = 'name';
// keywordno = 'phone_no';
  states = [
    {
      name: 'Arkansas',
      population: '82.978M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];
customers: Array<any>;
number;
email;
address;
selectedUser: Array<any>;
constructor(private db: DatabaseServiceService) {

  this.getAllUser();
}

ngOnInit() {
  console.log(this.users);
}

// onSelect(selectedItem: any) {
//   this.selectedUser = selectedItem;
//   console.log('Selected item Id: ', selectedItem ); // You get the Id of the selected item here
// }

selectEvent(item) {
  this.selectedUser = item;
  console.log('Selected item Id: ', item );
  this.number = item.phone_no;
  this.email = item.email_address;
  this.address = item.address;
   // You get the Id of the selected item here
}



getAllUser() {
  this.db.getCustomerWithLastTransaction().subscribe(data => {
    console.log(data);
    this.customers = data;
  });
}

  addActiveUser() {
    console.log('Active User added');
    this.db.addActiveUsers(this.selectedUser).subscribe(res => {
      console.log(res);
    });
}

}
