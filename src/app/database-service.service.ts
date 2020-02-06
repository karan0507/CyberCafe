
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DatabaseServiceService {
    // pal = {name: '1', description: 'shasd', date: 'sa'};
    resturl = 'http://localhost:8880/';
    constructor(private http: HttpClient) {

    }

    login(): Observable<any> {
     return this.http.get(this.resturl + 'login');
    }

    addUser(user): Observable<any> {
        // console.log(this.pal);
       return this.http.post('http://localhost:8880/' + 'customer' , user);

    }

    addTransaction(transaction) {
        this.http.post(this.resturl + 'transaction', transaction).
        subscribe(res =>  {
            console.log('database service transaction called' );
            console.log(res);
            // this.deleteActicveUser();
        });
    }

    deleteActicveUser(param): Observable<any> {
     return this.http.delete(this.resturl + 'deleteActiveUsers/' + param);
    }

    getCustTran(): Observable<any> {
       return this.http.get(this.resturl + 'cust_trans');
    }
    listAllCustomers(): Observable<any> {
        return this.http.get(this.resturl + 'customer');

    }

    getCustomerWithLastTransaction(): Observable<any> {
        return this.http.get(this.resturl + 'last_trans');
    }

    addActiveUsers(user): Observable<any> {
        console.log('active user in service');
        return this.http.post(this.resturl + 'addActiveUsers' , user);
    }



    getAllActiveUsers(): Observable<any> {
      return this.http.get(this.resturl + 'activeUsers');
    }

}
