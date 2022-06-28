import { Component, OnInit } from '@angular/core';
import { ProductGalleryService } from 'src/app/services/product-gallery.service';
import { galleryInterface } from 'src/app/interfaces/gallery';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.css']
})
export class ProjectGalleryComponent implements OnInit {
  galleryData: galleryInterface [] = []
  mainImage?: string;
  constructor(private gal: ProductGalleryService) { }

  ngOnInit(): void {
    this.galleryData = this.gal.getGalleryData();
    this.mainImage = this.galleryData[0].url;
  }
  onSelect(item: galleryInterface){
    this.mainImage = item.url;
  }
}
