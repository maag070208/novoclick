import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aperitivo',
  templateUrl: './aperitivo.component.html',
  styleUrls: ['./aperitivo.component.css'],
})
export class AperitivoComponent implements OnInit {
  time = 5000;
  constructor() {}

  ngOnInit(): void {}

  /*Aqui se almacena los datos de las tarjeas
   recuerda que cambia con cada tarjeta se tiene que 
  hacer un ARRAY de String donde almacenaran todos los platos seleccionados*/
  //! START INFO
  Addeddesc = [];
  Addedtitle = [];
  Addedid: [];
  //! END INFO
  /*Aqui se almacena los datos de las tarjeas
   recuerda que cambia con cada tarjeta se tiene que 
  hacer un ARRAY de String donde almacenaran todos los platos seleccionados*/
  //! START INFO
  desc = '';
  title = '';
  id: '';
  //! END INFO
  exist = 'yes';
  card = [
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/1 analisis web.png',
      title: 'Analisis Web',
      id: 'checkAnalisis',
      desc: 'HOLA',
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/2 analisis de rrss.png',
      title: 'Analisis rrss',
      id: 'checkAnalisisrss',
      desc: 'HOLA2',
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/3 analisis de competencia.png',
      title: 'Analisis de competencia',
      id: 'checkCompetencia',
      desc: 'HOLA3',
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/4 cluster de audiencia.png',
      title: 'Cluster de audiencia',
      id: 'checkCluster',
      desc: 'HOLA4',
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/5Analisisdeestrategia.png',
      title: 'Analisis de estrategia de atraccion',
      id: 'checkAnalisisEstrategia',
      desc: 'HOLA5',
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/6Analisisdepauta.png',
      title: 'Analisis de pauta digital',
      id: 'checkAnalisisPauta',
      desc: 'HOLA6',
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/7Analiticadebasededatso.png',
      title: ' Analitica de base de datos',
      id: 'checkAnaliticabase',
      desc: 'HOLA7',
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/8Analisisdeconversion.png',
      title: 'Analisis de gestion y conversion de leads',
      id: 'checkAnalisisGestion',
      desc: 'HOLA8',
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/9Analisidesatisfaccion.png',
      title: 'Analisis de satisfaccion del cliente',
      id: 'checkAnalisissatisfaccion',
      desc: 'HOLA9',
    },
  ];

  onSelectCard = (id, desc, title) => {
    let check = document.getElementById(id);
    if (check.click) {
      let descCard = document.getElementById('aperitivosCard');
      descCard.classList.replace('invisibleCard', 'visibleCard');
      this.desc = desc;
      this.title = title;
      this.id = id;
    }
  };

  sendPlato = () => {
    if (this.exist == 'yes')
    {
      this.Addedtitle.push(this.title);
      this.exist = 'no';
    }
     else if (this.exist == 'no')
    {
      if (this.Addedtitle.includes(this.title)) 
    {
        console.log(this.Addedtitle + ' ' + this.title);
    } else 
    {
        this.Addedtitle.push(this.title);
    }
    
    }

  };
}
