import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopRoutingModule} from './shop-routing.module';
import {CarouselModule} from 'ngx-owl-carousel-2';
import {ShopDetailsComponent} from './shop-details/shop-details.component';
import {ShopCardComponent} from './shop-card/shop-card.component';



@NgModule({
  declarations: [
    ShopDetailsComponent,
    ShopCardComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CarouselModule
  ]
})
export class ShopModule { }
