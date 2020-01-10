import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseServiceService } from '../database-service.service';


@Component({
  selector: 'app-active-record',
  templateUrl: './active-record.component.html',
  styleUrls: ['./active-record.component.scss']
})
export class ActiveRecordComponent implements OnInit {
  
 name: Array<any> = ['hello','yash','where','is','your','office','sejal','also','works','there','kya?'];

  constructor(private db: DatabaseServiceService) { 

    
  }

  ngOnInit() {
  }
  profileForm = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
  });

  formControlValue = '';

  findChoices(searchText: string) {
    return ['John', 'Jane', 'Jonny'].filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  getChoiceLabel(choice: string) {
    return `${choice} `;
  }
}
