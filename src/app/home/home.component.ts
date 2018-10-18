import {Component, Inject, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {CookieService} from 'ngx-cookie-service';
import {DOCUMENT} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apiUrl = environment.AUTH_URL;
  loggedIn = false;
  constructor(  private cookieService: CookieService,
                @Inject(DOCUMENT) private document: any, private http: HttpClient) {
  }

  ngOnInit() {
    this.checkIfAuthenticated();
  }

  checkIfAuthenticated() {
    try {
      this.http.get(this.apiUrl + '/userdetails', {observe: 'response', withCredentials: true}).subscribe(res => {
        if (res.body !== '') {
          this.loggedIn = true;
          this.cookieService.set(environment.COOKIE_USER, res.body[environment.COOKIE_USER]);
          this.cookieService.set(environment.COOKIE_AUTH, res.body[environment.COOKIE_AUTH]);
        } else {
          this.document.location.href = environment.AUTH_URL + '/token';
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

}
