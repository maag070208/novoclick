import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {

  time = 1500;
  constructor() { }

  ngOnInit(): void {
  }
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
        '../../../../../assets/images/paltosDigitales/postres/CONTACT CENTER.png',
      title: `Analisis Web`,
      id: 'checkAnalisisWeb',
      desc: ` 
      Brief.
      Monitoreo y listening de RRSS
      Medición de alcances
      Medición de fortaleza de marca
      Medición de sentimientos y reputación 
      Medición de impactos`,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/postres/CUSTOMER EXPIERENCE.png',
      title: 'Analisis rrss',
      id: 'checkAnalisisRRSS',
      desc: `
      Brief.
      Análisis de búsquedas orgánicas y pagas
      Análisis de keywords
      Análisis de autoridad del dominio 
      Análisis de back links
      Análisis de publicidad en Display
      Mapa de posicionamiento de la competencia 
      Número de páginas indexadas
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/postres/INTEGRACION A SU CRM.png',
      title: 'Analisis de competencia',
      id: 'checkClusterAnalisisdecompetencia',
      desc: `
      Brief.
      Definición e identificación de cluster de audiencia
      Definición de buyer persona por cada cluster
      Alcance por cluster
      Enfoque de contenido por cada cluster
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/postres/PLATAFORMA.png',
      title: 'Cluster de audiencia',
      id: 'checkClusterdeaudiencia',
      desc: `
      Brief.
      Análisis de contenido de valor
      Análisis de volumen de tráfico orgánico
      Análisis de crecimiento de RRSS 
      Análisis de generación de leads
      Medición de resultados
      `,
    },
  ];

  onSelectCard = (id, desc, title) => {
    let check = document.getElementById(id);
    if (check.click) {
      let descCard = document.getElementById('postresCard');
      descCard.classList.replace('invisibleCard', 'visibleCard');
      this.desc = desc;
      this.title = title;
      this.id = id;
      console.log(this.id);
      
    }
  };

  sendPlato = () => {
    let checkCard = document.getElementById(this.id);
    console.log(checkCard);
    
    if (this.exist == 'yes')
    {
      this.Addedtitle.push(this.title);
      checkCard.classList.replace('botonInput','botonInputActive')
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
        checkCard.classList.replace('botonInput','botonInputActive')
        console.log(checkCard);
    }
    
    }

  };
}
 