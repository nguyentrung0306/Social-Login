import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    items: 4,
    dots: false,
    nav: true,
    navText: ['<span class=\'fa fa-angle-left\'><span/>', '<span class=\'fa fa-angle-right\'><span/>'],
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
        items: 2,
      },

      768: {
        items: 3,
      },

      992: {
        items: 4,
      }
    }
  };
  constructor() {}

  ngOnInit(): void {
  }

}
