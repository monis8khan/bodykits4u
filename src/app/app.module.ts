import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent } from './components/products/products.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { QueryFormComponent } from './components/query-form/query-form.component';
import { ProjectGalleryComponent } from './components/project-gallery/project-gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,
    ServicesComponent,
    ProductsComponent,
    TestimonialsComponent,
    QueryFormComponent,
    ProjectGalleryComponent,
    FooterComponent,
    SectionHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
