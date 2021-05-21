import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import {ShopGridComponent} from './shop/shop-grid/shop-grid.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {CarouselModule} from 'ngx-owl-carousel-2';

@NgModule({
  declarations: [
    ClientComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    CheckoutComponent,
    ShopGridComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CarouselModule
  ]
})
export class ClientModule { }
