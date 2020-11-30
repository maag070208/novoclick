import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'novoclick';
  public showOverlay = true;

  constructor( ) {}

  ngOnInit(): void {

    setTimeout(()=>{
      this.displayLoader();
      document.getElementById('loading').style.display = 'none';
    },1000);
  }

   displayLoader(){
     let loader = document.getElementById('loading');
     loader.className = "animated fadeOut";
   }



}
