import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrls: ['./punto5.component.css']
})
export class Punto5Component implements OnInit {
  public imagesUrl;
  constructor() { }

  ngOnInit(): void {
    this.imagesUrl = ['/assets/img/obra2.jpg', '/assets/img/obra3.jpg', '/assets/img/obra4.jpg', '/assets/img/obra1.jpg'];
  }

}
