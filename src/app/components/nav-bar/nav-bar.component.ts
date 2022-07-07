import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  btn:any;
  nav:any;
  constructor() { }

  ngOnInit(): void {
    this.btn = document.getElementById('menu-btn')
    this.nav = document.getElementById('menu')
  }

  toggleMobileMenu() {
    this.btn.classList.toggle("open")
    this.nav.classList.toggle('flex')
    this.nav.classList.toggle('hidden')
        
  }

}
