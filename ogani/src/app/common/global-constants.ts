import {environment} from '../../environments/environment';

const API_BASE_URL = environment.API_BASE_URL;
const OAUTH2_REDIRECT_URI = 'http://localhost:4200/oauth2/redirect';

export class GlobalConstants {

  public static ACCESS_TOKEN = 'accessToken';
  public static GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
  public static FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
  public static GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;

}
