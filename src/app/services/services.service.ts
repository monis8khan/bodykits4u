import { Injectable } from '@angular/core';
import {servicesInterface} from '../interfaces/services'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  getServiceData(){
    return servicesData;
  }
}


var servicesData : servicesInterface[] = [{
  id: 1,
  name:"Projects",
  desc:"We build cars from chasis to top of the line model. Either drag, drift or show cars.",
  icon:"/assets/images/car-racing.png"
},{
  id: 2,
  name:"Bodykits",
  desc:"We provides the best quality car bodykits and accessories all around the country.",
  icon:"/assets/images/car-detailing.png"
},{
  id: 3,
  name:"Car Care Kit",
  desc:"Our car care kit consist of top quality products which keeps your car shining.",
  icon:"/assets/images/f1-car.png"
}]