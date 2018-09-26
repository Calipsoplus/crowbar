import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxRemoteDesktopModule } from '../index';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import { HttpClientModule } from '@angular/common/http';

import { ClipboardModalComponent } from './components';
import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { RouterModule } from '@angular/router';
import { FileSizePipe } from './pipes';
import { LoginComponent } from './login/login.component';

import { CookieService } from 'ngx-cookie-service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { RemoteDesktopComponent } from './remote-desktop/remote-desktop.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ClipboardModalComponent,
    FileSizePipe,
    LoginComponent,
    AppNavbarComponent,
    RemoteDesktopComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgxRemoteDesktopModule,
    HttpModule,
    HttpClientModule,
    MatSnackBarModule,
    CodemirrorModule,
    FormsModule,
    RouterModule.forRoot([]),
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}, CookieService,
  ],
  entryComponents: [
    ClipboardModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
