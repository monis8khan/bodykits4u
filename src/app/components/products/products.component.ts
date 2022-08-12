import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsResponse } from 'src/app/interfaces/productsResponse';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList?: any[] = [{
    id: "1",
    row: 2,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 109.96,
    quantity: 2,
    category: "Body"
  }];
  constructor(private product: ProductsService) { }

  ngOnInit(): void {
    this.product.getProducts().subscribe(data => {
      let temp : any = data;
      this.productsList = temp.data;
      console.log(temp.status)

    })
  }

}
