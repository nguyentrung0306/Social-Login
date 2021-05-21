import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {GlobalConstants} from '../../../common/global-constants';

@Component({
  selector: 'app-oauth2-redirect-handler',
  templateUrl: './oauth2-redirect-handler.component.html',
  styleUrls: ['./oauth2-redirect-handler.component.scss']
})
export class Oauth2RedirectHandlerComponent implements OnInit {

  constructor(
    private router: Router,
    private cookie: CookieService
  ) { }

  ngOnInit(): void {
    const token = this.getUrlParameter('token');
    const error = this.getUrlParameter('error');

    if (token) {
      localStorage.setItem(GlobalConstants.ACCESS_TOKEN, token);
      this.cookie.set(GlobalConstants.ACCESS_TOKEN, token);
      this.router.navigate(['']);
    } else {
      this.router.navigate(['login']);
    }
  }

  getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    const results = regex.exec(this.router.url);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

}
