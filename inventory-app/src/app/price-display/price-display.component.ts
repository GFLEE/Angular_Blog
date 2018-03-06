import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.module'
@Component({
  selector: 'price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {
@Input() price:number;
  constructor() { }

  
 
  ngOnInit() {
  }

}
