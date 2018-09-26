import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import { Virtualmachine } from './models/virtualmachine';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class VirtualmachineService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: Http, private cookieService: CookieService) {}

  getVirtualMachines(user): Observable<Virtualmachine[]> {

    return this.http.get(this.apiUrl + '/machines/' + user, {withCredentials: true}).map((res: Response) => {
      console.log(res.json())
      return <Virtualmachine[]> res.json();
    });
  }
}
