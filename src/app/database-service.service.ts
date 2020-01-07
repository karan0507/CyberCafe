
import { Injectable } from '@angular/core';
import * as mysql from 'mysql';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  constructor() {

  }

  db() {
    const dbconn = mysql.createConnection({
      host: 'localhost',
          user: 'root',
          password: 'ac0de52dh',
          database: 'electron'
    });

    dbconn.connect();
    dbconn.query('CREATE TABLE IF NOT EXISTS contacts(id INT, name VARCHAR(50), email VARCHAR(100))',
      (err) => {
        if (err) {
          console.log('Error!', err);
        } else {
          console.log('sucess');
        }
      }
    );
  }

}
