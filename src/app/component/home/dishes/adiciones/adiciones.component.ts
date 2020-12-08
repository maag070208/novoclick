import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adiciones',
  templateUrl: './adiciones.component.html',
  styleUrls: ['./adiciones.component.css']
})
export class AdicionesComponent implements OnInit {

  time = 1500;
  constructor() { }

  ngOnInit(): void {
    console.log('HOLA AMOR <3');
  }
  desc = '';
 
  card = [
    {
      img: '../../../../../assets/images/paltosDigitales/adiciones/CALIFICACIONLEADS.png',
      title: 'Calificacion de leads',
      id: 'checkCalificaciones',
      desc: 'HOLA'
    },
    {
      img: '../../../../../assets/images/paltosDigitales/adiciones/CONVERSIONLEADS.png',
      title: 'Conversion de leads',
      id: 'checkConversion',
      desc: 'HOLA2'
    },
    {
      img: '../../../../../assets/images/paltosDigitales/adiciones/GESTIONLEADS.png',
      title: 'Gestion de leads',
      id: 'checkGestion',
      desc: 'HOLA3'
    }
  ];

  onSelectCard = (id, desc) =>{
    let check = document.getElementById(id);
    if(check.click){
      let descCard = document.getElementById('adicionesCard');
      descCard.classList.replace('invisibleCard','visibleCard');
      this.desc = desc
    }
  }



}
