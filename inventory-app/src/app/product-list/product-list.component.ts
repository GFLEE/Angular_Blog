import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.module'
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 @Input() products:Product[];
 @Output() onProductSelected:EventEmitter<Product>
  private currentProduct:Product;
  constructor() { 
  this.onProductSelected=new EventEmitter();

  }

  ngOnInit() {
  }



  clicked(product:Product){
    this.currentProduct=product;
    this.onProductSelected.emit(product)
  }

  isSelected(product:Product){
  
     if(!product||!this.currentProduct)
     return false;
      return product.sku===this.currentProduct.sku

  }

 
}
