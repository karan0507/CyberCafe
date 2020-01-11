import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { DatabaseServiceService } from '../database-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private db: DatabaseServiceService, private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone_no: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      photo: ['', [Validators.required, ]],
      id_photo: ['', [Validators.required, Validators.minLength(5)]],
      address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(450)]],
      email_address: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
      remark: ['none'],
    });
  }

  ngOnInit() {
  }


  saveUser() {
    console.log(this.registerForm.value);
    console.log('hello i am save user');
    this.db.addUser(this.registerForm.value);
  }


}
