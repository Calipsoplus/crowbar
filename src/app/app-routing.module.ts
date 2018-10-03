import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RemoteDesktopComponent} from './remote-desktop/remote-desktop.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RemoteDesktopDashboardComponent} from './remote-desktop-dashboard/remote-desktop-dashboard.component';
import {JupyterhubComponent} from './jupyterhub/jupyterhub.component';
import {VirtualMachinesComponent} from './virtual-machines/virtual-machines.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'machine-view/:ip', component: RemoteDesktopComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'remote-desktop', component: RemoteDesktopDashboardComponent},
  {path: 'jupyterhub', component: JupyterhubComponent},
  {path: 'virtual-machines', component: VirtualMachinesComponent},
  {path: '', component: HomeComponent},
  // TODO  {path: '**', component: PageNotFound}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
