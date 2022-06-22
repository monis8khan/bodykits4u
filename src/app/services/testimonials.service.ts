import { Injectable } from '@angular/core';
import { testimonialsInterface } from '../interfaces/testimonials';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor() { }
  getTestimonialsData() {
    return testimonialsData;
  }
}


var testimonialsData: testimonialsInterface[] = [{
  id: 1,
  name: "JohnDoe",
  title: "Amazing Angular Developer",
  message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Quae dolores deserunt ea doloremque natus error, 
  rerum quas odio quaerat nam ex commodi hic, 
  suscipit in a veritatis pariatur minus consequuntur!`,
  image: "/assets/images/userTestimonial.avif"
}, {
  id: 2,
  name: "Usman",
  title: "Amazing Angular Developer",
  message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Quae dolores deserunt ea doloremque natus error, 
  rerum quas odio quaerat nam ex commodi hic, 
  suscipit in a veritatis pariatur minus consequuntur!`,
  image: "/assets/images/userTestimonial.avif"
}, {
  id: 3,
  name: "Khizram",
  title: "Perfect Web Designer",
  message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Quae dolores deserunt ea doloremque natus error, 
  rerum quas odio quaerat nam ex commodi hic, 
  suscipit in a veritatis pariatur minus consequuntur!`,
  image: "/assets/images/userTestimonial.avif"
}]