import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
})
export class DishesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  plato = [
    {
      img:
        '../../../../assets/images/+fotos platos digitales/menu-platosD/aperitivos.png',
      title: 'Aperitivo',
    },
    {
      img:
        '../../../../assets/images/+fotos platos digitales/menu-platosD/Platos fuertes.png',
      title: 'Platos Fuertes',
    },
    {
      img:
        '../../../../assets/images/+fotos platos digitales/menu-platosD/platos especiales.png',
      title: 'Platos Especiales',
    },
    {
      img:
        '../../../../assets/images/+fotos platos digitales/menu-platosD/adciones.png',
      title: 'Adiciones',
    },
    {
      img:
        '../../../../assets/images/+fotos platos digitales/menu-platosD/postres.png',
      title: 'Postres',
    },
  ]; 

  onSelectPlato() {
    let plato = document.getElementById('plato1');
    let pplato1 = document.getElementById('pplato1');

    let aperitivosCarousel = document.getElementById('aperitivosCarousel');
    aperitivosCarousel.classList.replace(
      'invisibleCarousel',
      'visibleCarousel'
    );

    plato.classList.replace('contenedorPlato', 'contenedorPlatoActivo');
    pplato1.classList.replace('tituloPlato', 'tituloPlato1');
    plato.style.background = '#8edff4';

    //Desactive other dishes

    //2
    let plato2 = document.getElementById('plato2');
    plato2.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato2.classList.replace('plato2Active', 'plato2');
    plato2.style.background = '#FFFFFF';
    //3
    let plato3 = document.getElementById('plato3');
    let pplato3 = document.getElementById('pplato3');
    plato3.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato3.classList.replace('plato3Active', 'plato3');
    pplato3.classList.replace('tituloPlato3', 'tituloPlato');
    plato3.style.background = '#FFFFFF';
    //4
    let plato4 = document.getElementById('plato4');
    let pplato4 = document.getElementById('pplato4');
    plato4.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato4.classList.replace('plato4Active', 'plato4');
    pplato4.classList.replace('tituloPlato4', 'tituloPlato');
    plato4.style.background = '#FFFFFF';
    //5
    let plato5 = document.getElementById('plato5');
    let pplato5 = document.getElementById('pplato5');
    plato5.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato5.classList.replace('plato5Active', 'plato5');
    pplato5.classList.replace('tituloPlato5', 'tituloPlato');
    plato5.style.background = '#FFFFFF';

    //fuertes
    let platosFuertesCarousel = document.getElementById(
      'platosFuertesCarousel'
    );
    platosFuertesCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );
    //especiales
    let platosEspecialesCarousel = document.getElementById(
      'platosEspecialesCarousel'
    );
    platosEspecialesCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );
   //adiciones
    let adicionesCarousel = document.getElementById(
      'adicionesCarousel'
    );
    adicionesCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );
    //postres
    let postresCarousel = document.getElementById(
      'postresCarousel'
    );
    postresCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );

 


    let backgroundRed = document.getElementById('backgroundRed');
    backgroundRed.classList.remove('backgroundPlato2');
    backgroundRed.classList.remove('backgroundPlato3');
    backgroundRed.classList.remove('backgroundPlato4');
    backgroundRed.classList.remove('backgroundPlato5');
    backgroundRed.className = 'backgroundPlato1';
  }

  onSelectPlato2() {
    let plato2 = document.getElementById('plato2');
    let pplato2 = document.getElementById('pplato2');

    let platosFuertesCarousel = document.getElementById(
      'platosFuertesCarousel'
    );
    platosFuertesCarousel.classList.replace(
      'invisibleCarousel',
      'visibleCarousel'
    );

    plato2.classList.replace('contenedorPlato', 'contenedorPlatoActivo');
    plato2.classList.replace('plato2', 'plato2Active');
    pplato2.classList.replace('tituloPlato', 'tituloPlato2');
    plato2.style.background = '#f7b05e';
    //Desactive other dishes

    //1
    let plato = document.getElementById('plato1');
    let pplato1 = document.getElementById('pplato1');
    plato.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato.classList.replace('plato1Active', 'plato1');
    pplato1.classList.replace('tituloPlato1', 'tituloPlato');
    //3
    let plato3 = document.getElementById('plato3');
    let pplato3 = document.getElementById('pplato3');
    plato3.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato3.classList.replace('plato3Active', 'plato3');
    pplato3.classList.replace('tituloPlato3', 'tituloPlato');
    //4
    let plato4 = document.getElementById('plato4');
    let pplato4 = document.getElementById('pplato4');
    plato4.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato4.classList.replace('plato4Active', 'plato4');
    pplato4.classList.replace('tituloPlato4', 'tituloPlato');
    //5
    let plato5 = document.getElementById('plato5');
    let pplato5 = document.getElementById('pplato5');
    plato5.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato5.classList.replace('plato5Active', 'plato5');
    pplato5.classList.replace('tituloPlato5', 'tituloPlato');

    let aperitivosCarousel = document.getElementById('aperitivosCarousel');
    aperitivosCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );
    let platosEspecialesCarousel = document.getElementById('platosEspecialesCarousel'
    );
    platosEspecialesCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );

    //adiciones
    let adicionesCarousel = document.getElementById(
      'adicionesCarousel'
    );
    adicionesCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );
    //postres
    let postresCarousel = document.getElementById(
      'postresCarousel'
    );
    postresCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );


    plato.style.background = '#FFFFFF';
    plato3.style.background = '#FFFFFF';
    plato4.style.background = '#FFFFFF';
    plato5.style.background = '#FFFFFF';

    let backgroundRed = document.getElementById('backgroundRed');
    backgroundRed.classList.remove('backgroundPlato1');
    backgroundRed.classList.remove('backgroundPlato3');
    backgroundRed.classList.remove('backgroundPlato4');
    backgroundRed.classList.remove('backgroundPlato5');
    backgroundRed.className = 'backgroundPlato2';
  }

  //3
  onSelectPlato3() {
    let plato3 = document.getElementById('plato3');
    let pplato3 = document.getElementById('pplato3');
    plato3.classList.replace('contenedorPlato', 'contenedorPlatoActivo');
    plato3.classList.replace('plato3', 'plato3Active');
    pplato3.classList.replace('tituloPlato', 'tituloPlato3');
    plato3.style.background = '#f4d350';
    //Desactive other dishes

    //1
    let plato = document.getElementById('plato1');
    let pplato1 = document.getElementById('pplato1');
    plato.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato.classList.replace('plato1Active', 'plato1');
    pplato1.classList.replace('tituloPlato1', 'tituloPlato');
    //2
    let plato2 = document.getElementById('plato2');
    plato2.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato2.classList.replace('plato2Active', 'plato2');
    //4
    let plato4 = document.getElementById('plato4');
    let pplato4 = document.getElementById('pplato4');
    plato4.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato4.classList.replace('plato4Active', 'plato4');
    pplato4.classList.replace('tituloPlato4', 'tituloPlato');
    //5
    let plato5 = document.getElementById('plato5');
    let pplato5 = document.getElementById('pplato5');
    plato5.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato5.classList.replace('plato5Active', 'plato5');
    pplato5.classList.replace('tituloPlato5', 'tituloPlato');

    plato.style.background = '#FFFFFF';
    plato2.style.background = '#FFFFFF';
    plato4.style.background = '#FFFFFF';
    plato5.style.background = '#FFFFFF';

    let backgroundRed = document.getElementById('backgroundRed');
    backgroundRed.classList.remove('backgroundPlato1');
    backgroundRed.classList.remove('backgroundPlato2');
    backgroundRed.classList.remove('backgroundPlato4');
    backgroundRed.classList.remove('backgroundPlato5');
    backgroundRed.className = 'backgroundPlato3';

    let platosEspecialesCarousel = document.getElementById(
      'platosEspecialesCarousel'
    );
    platosEspecialesCarousel.classList.replace(
      'invisibleCarousel',
      'visibleCarousel'
    );

    let aperitivosCarousel = document.getElementById('aperitivosCarousel');
    aperitivosCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );
    let platosFuertesCarousel = document.getElementById('platosFuertesCarousel'
    );
    platosFuertesCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );

   
   //adiciones
    let adicionesCarousel = document.getElementById(
      'adicionesCarousel'
    );
    adicionesCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );
    //postres
    let postresCarousel = document.getElementById(
      'postresCarousel'
    );
    postresCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );

  }

  onSelectPlato4() {
    let plato4 = document.getElementById('plato4');
    let pplato4 = document.getElementById('pplato4');
    plato4.classList.replace('contenedorPlato', 'contenedorPlatoActivo');
    plato4.classList.replace('plato4', 'plato4Active');
    pplato4.classList.replace('tituloPlato', 'tituloPlato4');
    plato4.style.background = '#60adb5';

    //Desactive other dishes
    //1
    let plato = document.getElementById('plato1');
    let pplato1 = document.getElementById('pplato1');
    plato.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato.classList.replace('plato1Active', 'plato1');
    pplato1.classList.replace('tituloPlato1', 'tituloPlato');
    //2
    let plato2 = document.getElementById('plato2');
    plato2.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato2.classList.replace('plato2Active', 'plato2');
    //3
    let plato3 = document.getElementById('plato3');
    let pplato3 = document.getElementById('pplato3');
    plato3.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato3.classList.replace('plato3Active', 'plato3');
    pplato3.classList.replace('tituloPlato3', 'tituloPlato');
    //5
    let plato5 = document.getElementById('plato5');
    let pplato5 = document.getElementById('pplato5');
    plato5.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato5.classList.replace('plato5Active', 'plato5');
    pplato5.classList.replace('tituloPlato5', 'tituloPlato');

      //adiciones
      let adicionesCarousel = document.getElementById(
        'adicionesCarousel'
      );
      adicionesCarousel.classList.replace(
        'invisibleCarousel',
        'visibleCarousel'
      );

    //carousel #1
    let aperitivosCarousel = document.getElementById('aperitivosCarousel');
    aperitivosCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );
     //carousel #2
    let platosFuertesCarousel = document.getElementById(
      'platosFuertesCarousel'
    );
    platosFuertesCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );
    //carousel #3
    let platosEspecialesCarousel = document.getElementById(
      'platosEspecialesCarousel'
    );
    platosEspecialesCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );
    //postres
    let postresCarousel = document.getElementById(
      'postresCarousel'
    );
    postresCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );

    let backgroundRed = document.getElementById('backgroundRed');
    backgroundRed.classList.remove('backgroundPlato1');
    backgroundRed.classList.remove('backgroundPlato2');
    backgroundRed.classList.remove('backgroundPlato3');
    backgroundRed.classList.remove('backgroundPlato5');
    backgroundRed.className = 'backgroundPlato4';

    plato.style.background = '#FFFFFF';
    plato2.style.background = '#FFFFFF';
    plato3.style.background = '#FFFFFF';
    plato5.style.background = '#FFFFFF';
  }

  onSelectPlato5() {
    let plato5 = document.getElementById('plato5');
    let pplato5 = document.getElementById('pplato5');
    plato5.classList.replace('contenedorPlato', 'contenedorPlatoActivo');
    plato5.classList.replace('plato5', 'plato5Active');
    pplato5.classList.replace('tituloPlato', 'tituloPlato5');
    plato5.style.background = '#cae771';
    plato5.style.opacity = 'opacity: 80%';
    //Desactive other dishes

    //1
    let plato = document.getElementById('plato1');
    let pplato1 = document.getElementById('pplato1');
    plato.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato.classList.replace('plato1Active', 'plato1');
    pplato1.classList.replace('tituloPlato1', 'tituloPlato');
    //2
    let plato2 = document.getElementById('plato2');
    plato2.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato2.classList.replace('plato2Active', 'plato2');
    //3
    let plato3 = document.getElementById('plato3');
    let pplato3 = document.getElementById('pplato3');
    plato3.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato3.classList.replace('plato3Active', 'plato3');
    pplato3.classList.replace('tituloPlato3', 'tituloPlato');
    //4
    let plato4 = document.getElementById('plato4');
    let pplato4 = document.getElementById('pplato4');
    plato4.classList.replace('contenedorPlatoActivo', 'contenedorPlato');
    plato4.classList.replace('plato4Active', 'plato4');
    pplato4.classList.replace('tituloPlato4', 'tituloPlato');


      //postres
      let postresCarousel = document.getElementById(
        'postresCarousel'
      );
      postresCarousel.classList.replace(
        'invisibleCarousel',
        'visibleCarousel'
      );

    //carousel #1
    let aperitivosCarousel = document.getElementById('aperitivosCarousel');
    aperitivosCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );

    //carousel #2
    let platosFuertesCarousel = document.getElementById(
      'platosFuertesCarousel'
    );
    platosFuertesCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );
   //carousel #3
    let platosEspecialesCarousel = document.getElementById(
      'platosEspecialesCarousel'
    );
    platosEspecialesCarousel.classList.replace(
      'visibleCarousel',
      'invisibleCarousel'
    );
   //adiciones
   let adicionesCarousel = document.getElementById(
    'adicionesCarousel'
  );
  adicionesCarousel.classList.replace(
    'visibleCarousel',
    'invisibleCarousel'
  );

    let backgroundRed = document.getElementById('backgroundRed');
    backgroundRed.classList.remove('backgroundPlato1');
    backgroundRed.classList.remove('backgroundPlato2');
    backgroundRed.classList.remove('backgroundPlato3');
    backgroundRed.classList.remove('backgroundPlato4');
    backgroundRed.className = 'backgroundPlato5';

    plato.style.background = '#FFFFFF';
    plato2.style.background = '#FFFFFF';
    plato3.style.background = '#FFFFFF';
    plato4.style.background = '#FFFFFF';
  }
}
