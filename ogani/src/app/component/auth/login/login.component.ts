import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GlobalConstants} from '../../../common/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor() { }
  GOOGLE_AUTH_URL = GlobalConstants.GOOGLE_AUTH_URL;
  FACEBOOK_AUTH_URL = GlobalConstants.FACEBOOK_AUTH_URL;
  GITHUB_AUTH_URL = GlobalConstants.GITHUB_AUTH_URL;

  background = 'background-image: url(\'assets/img/background/bg-login.jpg\')';
  googleLogo = 'assets/img/logo/google-logo.png';
  fbLogo = 'assets/img/logo/fb-logo.png';
  githubLogo = 'assets/img/logo/github-logo.png';

  ngOnInit(): void {
  }

}
