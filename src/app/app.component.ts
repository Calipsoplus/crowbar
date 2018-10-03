import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RemoteDesktopManager } from '../services';
import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['../themes/default.scss', './app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
    private manager: RemoteDesktopManager;

    constructor(private ngbModal: NgbModal,
          private snackBar: MatSnackBar,
          private cookieService: CookieService,
          @Inject(DOCUMENT) private document: any) {
    }

    ngOnInit() {
      this.checkIfAuthenticated();

    }

    checkIfAuthenticated() {
      if (this.cookieService.check(environment.COOKIE_AUTH) === false) {
        this.document.location.href = environment.AUTH_URL;
      }
    }
}
