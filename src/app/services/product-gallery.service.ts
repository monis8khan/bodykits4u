import { Injectable } from '@angular/core';
import { galleryInterface } from '../interfaces/gallery';

@Injectable({
  providedIn: 'root'
})
export class ProductGalleryService {

  constructor() { }
  getGalleryData(){
    return gallery;
  }
}


var gallery: galleryInterface [] = [{
  id: 1,
  url: "https://img.freepik.com/free-vector/sport-car-jdm-illustration_73313-244.jpg?w=2000",
  alt: "slammed"
},
{
  id: 2,
  url: "https://images.creativemarket.com/0.1.0/ps/9437618/1820/1214/m1/fpnw/wm0/eps-.png?1605773008&s=00e3f8ede2e7c17a345285e4582cfe9e",
  alt: "slammed"
},
{
  id: 3,
  url: "https://images.creativemarket.com/0.1.0/ps/10393338/1820/1214/m1/fpnw/wm0/preview_cm-.png?1622250152&s=2179c22a42ff45138d3e36838197c4ee",
  alt: "slammed"
},{
  id: 4,
  url: "https://img.freepik.com/free-vector/sport-car-jdm-illustration_73313-244.jpg?w=2000",
  alt: "slammed"
},
{
  id: 5,
  url: "https://images.creativemarket.com/0.1.0/ps/9437618/1820/1214/m1/fpnw/wm0/eps-.png?1605773008&s=00e3f8ede2e7c17a345285e4582cfe9e",
  alt: "slammed"
}]
