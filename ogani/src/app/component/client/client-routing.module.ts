import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopGridComponent} from './shop/shop-grid/shop-grid.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {ClientComponent} from './client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'shop-grid',
        component: ShopGridComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('./shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
