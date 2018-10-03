import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Virtualmachine } from '../models/virtualmachine';
import { VirtualmachineService } from '../virtualmachine.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-remote-desktop-dashboard',
  templateUrl: './remote-desktop-dashboard.component.html',
  styleUrls: ['./remote-desktop-dashboard.component.css']
})
export class RemoteDesktopDashboardComponent implements OnInit {
  machines: Virtualmachine[] = [];
  user = '';

  constructor(private virtualMachineService: VirtualmachineService,
              private router: Router,
              private cookieService: CookieService,
              @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {

    // if (this.cookieService.check('esrf-user')) {
    if (this.cookieService.check(environment.COOKIE_USER)) {
      console.log('Calipso user: ', this.cookieService.get(environment.COOKIE_USER));
      this.user = this.cookieService.get(environment.COOKIE_USER);
    } else {
      this.document.location.href = environment.AUTH_URL + '/token';
    }

    this.getVirtualMachines();
  }

  getVirtualMachines(): void {
    this.virtualMachineService.getVirtualMachines().subscribe(machines => this.machines = machines);
  }

  btnclick(ip) {
    console.log(ip);
    this.router.navigate(['/machine-view', ip]);
  }


}
