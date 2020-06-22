import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public imagesUrl;
  constructor() {
  }

  ngOnInit(): void {
    this.imagesUrl = ['/assets/img/obra2.jpg', '/assets/img/obra3.jpg', '/assets/img/obra4.jpg'];
  }
}