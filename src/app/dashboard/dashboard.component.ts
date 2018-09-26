import { Component, OnInit } from '@angular/core';
import { Virtualmachine } from '../models/virtualmachine';
import { VirtualmachineService } from '../virtualmachine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  machines: Virtualmachine[] = [];
  user = '';
  constructor(private virtualMachineService: VirtualmachineService, private router: Router) { }

  ngOnInit() {
    this.getVirtualMachines();
  }

  getVirtualMachines(): void {
    this.virtualMachineService.getVirtualMachines(this.user).subscribe(machines => this.machines = machines);
  }

  btnclick(ip) {
    console.log(ip);
    this.router.navigate(['/machine-view', ip]);
  }

}
