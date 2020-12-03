import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nosotros() {
   window.scrollTo({top: 1100});
  }
  herramientas() {
    window.scrollTo({top: 2800});
   }
   platosDigitales() {
    window.scrollTo({top: 3750});
   }
   academia() {
    window.scrollTo({top: 1100});
   }
}
