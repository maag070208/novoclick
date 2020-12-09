import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activarChefDigital1(){
    let chef1 = document.getElementById('avatar1');
    chef1.style.display = '';
    window.scrollTo({top: 840});
  }

}
