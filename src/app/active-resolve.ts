import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DatabaseServiceService } from './database-service.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class ActiveResolve  implements Resolve<any> {

    constructor(private  dataservice: DatabaseServiceService) { }
 resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<any> {
    return this.dataservice.getAllActiveUsers();
  }
}
