import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
// import { DatabaseServiceService } from '../database-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private db: DatabaseServiceService) { }

  ngOnInit() {
  }



  getpost() {
    console.log('i am getting called');
    this.db.createPost();
  }

}
