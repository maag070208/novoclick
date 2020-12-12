import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platos-fuertes',
  templateUrl: './platos-fuertes.component.html',
  styleUrls: ['./platos-fuertes.component.css']
})
export class PlatosFuertesComponent implements OnInit {
  time = 5000;
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
        '../../../../../assets/images/paltosDigitales/platosfuertes/1 Estrategia SEO.png',
      title: 'ESTRATEGIA SEÓ',
      id: 'checkESTRATEGIA',
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
        '../../../../../assets/images/paltosDigitales/platosfuertes/2 Estrategia SEM.png',
      title: `ESTRATEGIA SEM`,
      id: 'checkESTRATEGIASEM',
      desc: ` 
      Brief.
      Definición de objetivos 
      Modelado de la estrategia y selección de palabras claves
      Estimación el retorno de la inversión 
      Ejecución táctica 
      Medición, optimización  y reporte de la campaña
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/platosfuertes/3 E-mail Marketing.png',
      title: 'E-MAIL MARKETING',
      id: 'checkMARKETING',
      desc: `
      Brief.
      Definición de los objetivos del e-mail marketing
      Elección de audiencias (base del cliente y/o suscriptores de Novoclick)
      Tageo de las audiencias vs. perfil de buyer persona
      Modelado de la estrategia, frecuencia de envíos y automatización del embudo
      Ejecución táctica
      Resolución de insumos de diseño y habeas data de flyer y landing page 
      Medición, optimización  y reporte de estrategia 
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/platosfuertes/4 Administracion de trafico en RRSS.png',
      title: ' ADMINISTRACIÓN DE RRSS',
      id: 'checkRRSS',
      desc: `
      Brief.
      Análisis de situación actual
      Definición de la estrategia y los KPI’s de RRSS
      Modelado de la estrategia de contenidos, tráfico y presupuesto de pauta 
      Ejecución táctica (parrilla de contenidos y diseño de piezas de publicación)
      Administración por publicaciones y por RRSS
      Medición, optimización  y reporte de estrategia
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/platosfuertes/5 Analitica de datos  (planear, ejecutar y.png',
      title: 'DATA MANAGER ',
      id: 'checkMANAGER',
      desc: `
      Brief.
      Entendimiento de la necesidad 
      Definición de objetivos
      Ejecución táctica
      Medición, optimización  y reporte de estrategia
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/platosfuertes/6 Whatsapp Marketing.png',
      title: 'WHATSAPP MARKETING ',
      id: 'checkWHATSAPP',
      desc: `
      Brief
      Definición de la estrategia de WhatsApp Marketing
      Validación de la bases de datos
      Creación de la parrilla de contenidos 
      Creación optin : link para llevar a un sitio
      Diseño del sitio de aterrizaje 
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/platosfuertes/7 SMS marketing.png',
      title: 'SMS MARKETING ',
      id: 'checkSMS',
      desc: `
      Brief.
      Definición de la estrategia de WhatsApp Marketing
      Validación de la bases de datos
      Creación de la parrilla de contenidos 
      Creación optin : link para llevar a un sitio
      Diseño del sitio de aterrizaje 
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/platosfuertes/8 Publicidad en Redes Sociales .png',
      title: 'PAUTA DE PERFORMANCE RRSS',
      id: 'checkPERFORMANCE',
      desc: `
      Brief.
      Definición de los objetivos y presupuesto de la publicidad

      Modelado de segmentación y parrilla 

      Diseño creatividades y contenido audiovisual

      Programación embudos y automatizaciones 

      Mención en las RRSS de Novoclick

      Retargeting en RRSS

      Medición, optimización  y reporte de estrategia
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/platosfuertes/9 Publicidad programatica.png',
      title: 'PUBLICIDAD PROGRAMÁTICA',
      id: 'checkPUBLICIDAD',
      desc: `
      Brief.
      Definición de los objetivos y presupuesto de la publicidad programática
      Resolución de clusters de audiencia 
      Definición de canales 
      Definición de las tácticas 
      Medición, optimización  y reporte de campaña 
      `,
    },
  ];

  onSelectCard = (id, desc, title) => {
    let check = document.getElementById(id);
    if (check.click) {
      let descCard = document.getElementById('fuertesCard');
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
 