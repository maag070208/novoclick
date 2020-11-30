import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  plato = 
  [
  {
    img:'../../../../assets/images/+fotos platos digitales/menu-platosD/aperitivos.png',
    title:'Aperitivo'
  },
  {
    img:'../../../../assets/images/+fotos platos digitales/menu-platosD/Platos fuertes.png',
    title:'Platos Fuertes'
  },
  {
    img:'../../../../assets/images/+fotos platos digitales/menu-platosD/platos especiales.png',
    title:'Platos Especiales'
  },
  {
    img:'../../../../assets/images/+fotos platos digitales/menu-platosD/adciones.png',
    title:'Adiciones'
  },
  {
    img:'../../../../assets/images/+fotos platos digitales/menu-platosD/postres.png',
    title:'Postres'
  }
 ];

 onSelectPlato(){
  let plato = document.getElementById('plato1');
  let pplato1 = document.getElementById('pplato1');
  
  
  plato.classList.replace('contenedorPlato','contenedorPlatoActivo');
  pplato1.classList.replace('tituloPlato','tituloPlato1');

  //Desactive other dishes
  
  //2
  let plato2 = document.getElementById('plato2');
  plato2.classList.replace('contenedorPlatoActivo','contenedorPlato');
  plato2.classList.replace('plato2Active','plato2');
  //3
  let plato3 = document.getElementById('plato3');
  let pplato3 = document.getElementById('pplato3');
  plato3.classList.replace('contenedorPlatoActivo','contenedorPlato');
  plato3.classList.replace('plato3Active','plato3');
  pplato3.classList.replace('tituloPlato3','tituloPlato');
    //4
    let plato4 = document.getElementById('plato4');
    let pplato4 = document.getElementById('pplato4');
    plato4.classList.replace('contenedorPlatoActivo','contenedorPlato');
    plato4.classList.replace('plato4Active','plato4');
    pplato4.classList.replace('tituloPlato4','tituloPlato');
  }

  onSelectPlato2(){
    let plato2 = document.getElementById('plato2');
    let pplato2 = document.getElementById('pplato2');
    plato2.classList.replace('contenedorPlato','contenedorPlatoActivo');
    plato2.classList.replace('plato2','plato2Active');
    pplato2.classList.replace('tituloPlato','tituloPlato2');

    //Desactive other dishes

    //1
    let plato = document.getElementById('plato1');
    let pplato1 = document.getElementById('pplato1');
    plato.classList.replace('contenedorPlatoActivo','contenedorPlato');
    plato.classList.replace('plato1Active','plato1');
    pplato1.classList.replace('tituloPlato1','tituloPlato');

    //3
    let plato3 = document.getElementById('plato3');
    let pplato3 = document.getElementById('pplato3');
    plato3.classList.replace('contenedorPlatoActivo','contenedorPlato');
    plato3.classList.replace('plato3Active','plato3');
    pplato3.classList.replace('tituloPlato3','tituloPlato');
      //4
      let plato4 = document.getElementById('plato4');
      let pplato4 = document.getElementById('pplato4');
      plato4.classList.replace('contenedorPlatoActivo','contenedorPlato');
      plato4.classList.replace('plato4Active','plato4');
      pplato4.classList.replace('tituloPlato4','tituloPlato');
  }

  onSelectPlato3(){
    let plato3 = document.getElementById('plato3');
    let pplato3 = document.getElementById('pplato3');
    plato3.classList.replace('contenedorPlato','contenedorPlatoActivo');
    plato3.classList.replace('plato3','plato3Active');
    pplato3.classList.replace('tituloPlato','tituloPlato3');

    //Desactive other dishes

    //1
    let plato = document.getElementById('plato1');
    let pplato1 = document.getElementById('pplato1');
    plato.classList.replace('contenedorPlatoActivo','contenedorPlato');
    plato.classList.replace('plato1Active','plato1');
    pplato1.classList.replace('tituloPlato1','tituloPlato');
   //2
   let plato2 = document.getElementById('plato2');
   plato2.classList.replace('contenedorPlatoActivo','contenedorPlato');
   plato2.classList.replace('plato2Active','plato2');
     //4
     let plato4 = document.getElementById('plato4');
     let pplato4 = document.getElementById('pplato4');
     plato4.classList.replace('contenedorPlatoActivo','contenedorPlato');
     plato4.classList.replace('plato4Active','plato4');
     pplato4.classList.replace('tituloPlato4','tituloPlato');
  }


  onSelectPlato4(){
    let plato4 = document.getElementById('plato4');
    let pplato4 = document.getElementById('pplato4');
    plato4.classList.replace('contenedorPlato','contenedorPlatoActivo');
    plato4.classList.replace('plato4','plato4Active');
    pplato4.classList.replace('tituloPlato','tituloPlato4');

    //Desactive other dishes

    //1
    let plato = document.getElementById('plato1');
    let pplato1 = document.getElementById('pplato1');
    plato.classList.replace('contenedorPlatoActivo','contenedorPlato');
    plato.classList.replace('plato1Active','plato1');
    pplato1.classList.replace('tituloPlato1','tituloPlato');
    //2
    let plato2 = document.getElementById('plato2');
    plato2.classList.replace('contenedorPlatoActivo','contenedorPlato');
    plato2.classList.replace('plato2Active','plato2');
    //3
    let plato3 = document.getElementById('plato3');
    let pplato3 = document.getElementById('pplato3');
    plato3.classList.replace('contenedorPlatoActivo','contenedorPlato');
    plato3.classList.replace('plato3Active','plato3');
    pplato3.classList.replace('tituloPlato3','tituloPlato');
   
  }

}
