import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginDetails: Array<any>;
  loginForm: FormGroup;

  constructor(private db: DatabaseServiceService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }



  login() {
    this.router.navigateByUrl('register');
    console.log('i am getting clicked in login');
    this.db.login().subscribe(res => {
      this.loginDetails = res;
      console.log(this.loginDetails);
    });
    console.log(this.loginForm.value.username);
    // if (this.loginForm.value === this.loginDetails.forEach()) {
    //   this.router.navigateByUrl('register');
    // }



  }
}
