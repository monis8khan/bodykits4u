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
  productsList?: any[] = [];
  productToShow: object = {
    title: "",
    
  }; 
  showProducts = false;
  showModal = false;

  toggleModal(product:object) {
    this.productToShow = product;
    console.log(this.productToShow);
    this.showModal = !this.showModal;
  }
  constructor(private product: ProductsService) { }

  ngOnInit(): void {
    // this.product.getProducts().subscribe(data => {
    //   let temp : any = data;
    //   this.productsList = temp.data;
    //   this.showProducts = true;
    // })
    this.productsList = dataRecieved.data;
    this.showProducts = true;
  }

}

var dataRecieved = {
  "status": true,
  "data": [
    {
      "row": 2,
      "id": "pk_1",
      "title": "Honda Civic Ek Bodykyt",
      "image": "https://www.siambodykit.com/wp-content/uploads/2020/05/Webber-Bodykit-for-Honda-Civic-EK96-2.jpg",
      "description": "Bodykits4u is a style of aero kits for sports cars designed by Japan's Kei Miura. They're fabricated with a high degree of precision and built using digital laser scans of the cars that the kits adorn.",
      "price": 10,
      "quantity": 5,
      "category": "Body"
    },
    {
      "row": 3,
      "id": "pk_2",
      "title": "EVO Spoiler",
      "image": "https://www.xtremeautomart.com/wp-content/uploads/2019/02/EVO-SPOILER.jpg",
      "description": "Bodykits4u is a style of aero kits for sports cars designed by Japan's Kei Miura. They're fabricated with a high degree of precision and built using digital laser scans of the cars that the kits adorn.",
      "price": 15,
      "quantity": 4,
      "category": "Body"
    },
    {
      "row": 4,
      "id": "pk_3",
      "title": "GT Wing",
      "image": "https://www.xtremeautomart.com/wp-content/uploads/2019/02/EVO-SPOILER.jpg",
      "description": "Bodykits4u is a style of aero kits for sports cars designed by Japan's Kei Miura. They're fabricated with a high degree of precision and built using digital laser scans of the cars that the kits adorn.",
      "price": 20,
      "quantity": 2,
      "category": "Body"
    },
    {
      "row": 5,
      "id": "pk_4",
      "title": "Car Wash",
      "image": "https://www.siambodykit.com/wp-content/uploads/2020/05/Webber-Bodykit-for-Honda-Civic-EK96-2.jpg",
      "description": "Bodykits4u is a style of aero kits for sports cars designed by Japan's Kei Miura. They're fabricated with a high degree of precision and built using digital laser scans of the cars that the kits adorn.",
      "price": 15,
      "quantity": 1,
      "category": "Cleaning"
    },
    {
      "row": 6,
      "id": "pk_5",
      "title": "AMS Oil",
      "image": "https://www.xtremeautomart.com/wp-content/uploads/2019/02/EVO-SPOILER.jpg",
      "description": "Bodykits4u is a style of aero kits for sports cars designed by Japan's Kei Miura. They're fabricated with a high degree of precision and built using digital laser scans of the cars that the kits adorn.",
      "price": 10,
      "quantity": 100,
      "category": "Engine"
    },
    {
      "row": 7,
      "id": "pk_6",
      "title": "AMS Oil",
      "image": "https://www.xtremeautomart.com/wp-content/uploads/2019/02/EVO-SPOILER.jpg",
      "description": "Bodykits4u is a style of aero kits for sports cars designed by Japan's Kei Miura. They're fabricated with a high degree of precision and built using digital laser scans of the cars that the kits adorn.",
      "price": 10,
      "quantity": 100,
      "category": "Engine"
    }
  ]
}


