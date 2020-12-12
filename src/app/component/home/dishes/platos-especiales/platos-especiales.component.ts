import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platos-especiales',
  templateUrl: './platos-especiales.component.html',
  styleUrls: ['./platos-especiales.component.css']
})
export class PlatosEspecialesComponent implements OnInit {

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
        '../../../../../assets/images/paltosDigitales/platosespeciales/A-PLATOS ESPECIAL DE CONVERSION PARA.png',
      title: 'Generación de leads pre y post calificados ',
      id: 'checkGeneración',
      desc: `
    Brief.
	  Definición e identificación de cluster de audiencia
	  Definición de buyer persona por cada cluster
	  Creación de embudos de conversión y predicción 
	  Definición de objetivos MQL (Lead scoring)
	  Modelado de la estrategia digital 
	  Selección de canales digitales por cluster 
	  Definición de landing page con habeas data 
	  Gestión de leads (cronograma, canales de gestión, guiones y rutas)
 	  Definición de canales de calificación y frecuencia de contacto
 	  Creación del guión informativo y de calificación
 	  Entrega de data en panel de cliente en tiempo real 
 	  Reporte de gestión y calificación
 	  Poscalificación opcional de gestión comercial
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/platosespeciales/B-PLATOS ESPECIALES POR OBJETIVO.png',
      title: `GENERACIÓN DE LEADS POR FORMULARIO`,
      id: 'checkFORMULARIO',
      desc: ` 
      Brief.
      Definición de objetivos y presupuesto
      Definición de alcance y segmentación 
      Modelado de estrategia
      Definición de canales digitales 
      Taggeo sobre nuestras audiencias según el perfil solicitado
      Creación de embudos de conversión 
      Diseño de piezas gráficas por canal digital y diseño de landing page con habeas data
      Ejecución táctica sobre canales digitales y cronograma 
      Entrega en tiempo real de los datos en el panel de cliente
      Medición, optimización  y reporte de estrategia 
`,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/platosespeciales/C-PLATOS ESPECIALES INTERACTIVO.png',
      title: 'Generación de leads desde la Data del cliente',
      id: 'checkcliente',
      desc: `
      Brief.
      Definición de objetivos y presupuesto
      Modelado de estrategia
      Revisión de la data del cliente 
      Búsqueda de perfiles similares a sus audiencias fuera de su base de datos 
      Creación de embudos de conversión 
      Definición de canales digitales 
      Diseño de piezas gráficas por canal digital y diseño de landing page con habeas data
      Ejecución táctica sobre canales digitales y cronograma
      Entrega en tiempo real de los datos en el panel de cliente
      Medición, optimización  y reporte de estrategia 
      `,
    },
  ];

  onSelectCard = (id, desc, title) => {
    let check = document.getElementById(id);
    if (check.click) {
      let descCard = document.getElementById('especialesCard');
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
