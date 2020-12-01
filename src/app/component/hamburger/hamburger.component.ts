import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
})
export class HamburgerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  visible: String = 'false';

  @ViewChild('start') public start: ElementRef<any>;

  visibleClick = () => {
    //Navbar Items closeHamburgerMenu
    let element = document.getElementById('hamButtom');

    let Nosotros = document.getElementById('nosotros-1');
    let Herramientas = document.getElementById('herramientas-1');
    let Platos = document.getElementById('platos-digitales-1');
    let CloseMenu = document.getElementById('closeHamburgerMenu');

    //Navbar Items
    element.className = 'extra-menu';
    Nosotros.classList.replace('disableHamItems', 'item1');
    Herramientas.classList.replace('disableHamItems', 'item2');
    Platos.classList.replace('disableHamItems', 'item3');
    CloseMenu.classList.replace('disableHamItems', 'itemx');

    //Components
  };

  invisibleClick = () => {
    //Navbar Items
    let element = document.getElementById('hamButtom');
    let Nosotros = document.getElementById('nosotros-1');
    let Herramientas = document.getElementById('herramientas-1');
    let Platos = document.getElementById('platos-digitales-1');
    let CloseMenu = document.getElementById('closeHamburgerMenu');

    //Components
    let Start = document.getElementById('start');
    let About = document.getElementById('about-us');
    let What = document.getElementById('what');
    let Tools = document.getElementById('tools');
    let Dishes = document.getElementById('dishes');
    //Navbar Items
    element.className = 'container-hamburger effect';
    Nosotros.className = 'disableHamItems';
    Herramientas.className = 'disableHamItems';
    Platos.className = 'disableHamItems';
    CloseMenu.className = 'disableHamItems';

    //Components
    Start.classList.replace('disableComponents', 'start');
    About.classList.replace('disableComponents', 'about');
    What.classList.replace('disableComponents', 'what');
    Tools.classList.replace('disableComponents', 'tools');
    Dishes.classList.replace('disableComponents', 'dishes');
  };
  nosotros() {
    this.invisibleClick();
    window.scrollTo({ top: 1100 });
  }
  herramientas() {
    this.invisibleClick();
    window.scrollTo({ top: 2800 });
  }
  platosDigitales() {
    this.invisibleClick();
    window.scrollTo({ top: 3800 });
  }
  academia() {
    this.invisibleClick();
    window.scrollTo({ top: 1100 });
  }
}
