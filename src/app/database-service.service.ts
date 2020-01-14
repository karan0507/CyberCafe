
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DatabaseServiceService {
    // pal = {name: '1', description: 'shasd', date: 'sa'};
    resturl = 'http://localhost:8080/';
    constructor(private http: HttpClient) {

    }

    login(): Observable<any> {
     return this.http.get(this.resturl + 'login');
    }

    addUser(user) {
        // console.log(this.pal);
        this.http.post('http://localhost:8080/' + 'customer' , user).subscribe(res => console.log(res));
    }

    addTransaction(transaction) {
        this.http.post(this.resturl + 'transaction', transaction).subscribe(res =>  console.log('database service transaction called'));
    }

    getCustTran(): Observable<any> {
       return this.http.get(this.resturl + 'cust_trans');
    }
    listAllCustomers(): Observable<any> {
        return this.http.get(this.resturl + 'customer');

    }

}
