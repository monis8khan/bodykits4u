import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList?: any[];
  constructor(private product: ProductsService) { }

  ngOnInit(): void {
    this.product.getProducts().subscribe(data=>{
      this.productsList = data;
      console.log(data)
    })
  }

}
