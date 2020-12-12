import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  activarChefDigital2(){
    let chef1 = document.getElementById('avatar2');
    chef1.style.display = '';
    window.scrollTo({top: 1750});
  }
}
