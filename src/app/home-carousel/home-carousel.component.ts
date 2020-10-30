import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {

  slides = [
    {img: "assets/images/home/slider_montana_hover.png"},
    {img: "assets/images/home/slider_ruta_hover.png"},
    {img: "assets/images/home/slider_urbana_hover.png"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  constructor() { }

  ngOnInit() {
  }

}
