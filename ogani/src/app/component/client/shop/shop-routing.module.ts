import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopDetailsComponent} from './shop-details/shop-details.component';
import {ShopCardComponent} from './shop-card/shop-card.component';

export const routes: Routes = [
  {
    path: 'shop-details',
    component: ShopDetailsComponent
  },
  {
    path: 'shop-cart',
    component: ShopCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
