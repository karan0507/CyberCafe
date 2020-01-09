
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DatabaseServiceService {
    pal = {name: '1', description: 'shasd', date: 'sa'};
    resturl = 'http://localhost:8080/';
    constructor(private http: HttpClient) {

    }

    login(): Observable<any> {
     return this.http.get(this.resturl + 'login');
    }

    createPost() {
        console.log(this.pal);
        this.http.post('http://localhost:8080/' + 'customer' , this.pal).subscribe(res => console.log(res));
    }


}
