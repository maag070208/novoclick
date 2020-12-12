import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aperitivo',
  templateUrl: './aperitivo.component.html',
  styleUrls: ['./aperitivo.component.css'],
})
export class AperitivoComponent implements OnInit {
  time = 99999;
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
      desc: `
      Brief.
      Análisis SEO del sitio web 
      Análisis de rendimiento web
      Medición de la experiencia del cliente
      Análisis de contenido
      Reporte de recomendaciones de mejora
      Análisis de arquitectura del sitio web  
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/2 analisis de rrss.png',
      title: `Analisis rrss`,
      id: 'checkAnalisisrss',
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
        '../../../../../assets/images/paltosDigitales/aperitivos/3 analisis de competencia.png',
      title: 'Analisis de competencia',
      id: 'checkCompetencia',
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
        '../../../../../assets/images/paltosDigitales/aperitivos/4 cluster de audiencia.png',
      title: 'Cluster de audiencia',
      id: 'checkCluster',
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
        '../../../../../assets/images/paltosDigitales/aperitivos/5Analisisdeestrategia.png',
      title: 'Analisis de estrategia de atraccion',
      id: 'checkAnalisisEstrategia',
      desc: `
      Brief.
      Análisis de contenido de valor
      Análisis de volumen de tráfico orgánico
      Análisis de crecimiento de RRSS 
      Análisis de generación de leads
      Medición de resultados
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/6Analisisdepauta.png',
      title: 'Analisis de pauta digital',
      id: 'checkAnalisisPauta',
      desc: `
      Brief
      Análisis de canales de pauta digital 
      Análisis de publicidad Mobile
      Análisis de publicidad geolocalizada
      Análisis de presupuesto 
      Análisis de objetivos de pauta digital
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/7Analiticadebasededatso.png',
      title: ' Analitica de base de datos',
      id: 'checkAnaliticabase',
      desc: `
      Brief.
      Análisis de rebote
      Análisis de actualización de la base
      Normalización de la base 
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/8Analisisdeconversion.png',
      title: 'Analisis de gestion y conversion de leads',
      id: 'checkAnalisisGestion',
      desc: `
      Brief.
      Análisis de embudos de conversión
      Análisis de procesos 
      Análisis de herramientas de gestión 
      Análisis de modelos de automatización 
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/aperitivos/9Analisidesatisfaccion.png',
      title: 'Analisis de satisfaccion del cliente',
      id: 'checkAnalisissatisfaccion',
      desc: `
      Brief.
      Análisis de reacciones en RRSS
      Análisis de comentarios en RRSS
      Análisis de sentimientos a través de llamada 
      Análisis para medir reacciones en texto 
      `,
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
