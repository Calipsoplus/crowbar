import { Injectable } from '@angular/core';
import { Virtualmachine } from './models/virtualmachine';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VirtualmachineService {
  apiUrl = environment.AUTH_URL;

  constructor(private http: HttpClient) {
  }

  getVirtualMachines(): Observable<Virtualmachine[]> {
    try {
      return this.http.get<Virtualmachine[]>(this.apiUrl + '/virtualmachines/user', {withCredentials: true}).map(res => res);
    } catch (e) {
      console.log('Unable to get virtual machines from api');
      console.log(e);
    }
  }
}
