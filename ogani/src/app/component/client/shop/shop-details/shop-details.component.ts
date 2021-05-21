import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-2';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShopDetailsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    items: 4,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {

      0: {
        items: 1,
      },

      480: {
        items: 6,
      },

      768: {
        items: 3,
      },

      992: {
        items: 4,
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
