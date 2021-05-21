import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/auth/login/login.component';
import {HomeComponent} from './component/client/home/home.component';
import {Oauth2RedirectHandlerComponent} from './component/auth/oauth2-redirect-handler/oauth2-redirect-handler.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./component/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'oauth2/redirect',
    component: Oauth2RedirectHandlerComponent
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
