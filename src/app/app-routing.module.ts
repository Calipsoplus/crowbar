import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RemoteDesktopViewerComponent} from './remote-desktop-viewer/remote-desktop-viewer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RemoteDesktopDashboardComponent} from './remote-desktop-dashboard/remote-desktop-dashboard.component';
import {JupyterhubComponent} from './jupyterhub/jupyterhub.component';
import {VirtualMachinesComponent} from './virtual-machines/virtual-machines.component';
import {AdminDashboardComponent} from './admin/admin-dashboard/admin-dashboard.component';

import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'machine-view/:ip', component: RemoteDesktopViewerComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'remote-desktop', component: RemoteDesktopDashboardComponent},
  {path: 'jupyterhub', component: JupyterhubComponent},
  {path: 'virtual-machines', component: VirtualMachinesComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: '**', component: HomeComponent},
  {path: '', component: HomeComponent},
  // TODO  {path: '**', component: PageNotFound}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
