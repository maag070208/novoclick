import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {
  open = false;

  items = ['About', 'Our life', 'Projects', 'Team',' Contact'];

  constructor() { }

  ngOnInit(): void {
  }
  toggleOpen() {
    this.open = !this.open;
  }
}
