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
        '../../../../../assets/images/paltosDigitales/adiciones/CALIFICACIONLEADS.png',
      title: 'GESTIÓN DE LEADS',
      id: 'checkCALIFICACIONLEADS',
      desc: `
      Brief.
      Definición de objetivos 
      Modelado de la estrategia 
      Integración y trazabilidad por origen de registros
      Ejecución táctica 
      Entrega de huella de gestión en panel administrable 
      Reportería de estrategia 
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/adiciones/CONVERSIONLEADS.png',
      title: `CALIFICACIÓN DE LEADS `,
      id: 'checkCONVERSIONLEADS',
      desc: ` 
      Brief.
      Definición de objetivos y parámetros de calificación de leads
      Modelado de la estrategia
      Integración y trazabilidad por origen de registros
      Entrega de data en panel de cliente en tiempo real 
      Reporte de gestión y calificación
      Poscalificación opcional de gestión comercial
      `,
    },
    {
      img:
        '../../../../../assets/images/paltosDigitales/adiciones/GESTIONLEADS.png',
      title: 'CONVERSIÓN DE LEADS',
      id: 'checkGESTIONLEADS',
      desc: `
      Brief.
      Definición de objetivos y parámetros de calificación de leads 
      Modelado de la estrategia
      Integración y trazabilidad por origen de registros 
      Integración a su canal de ventas 
      Creación de alertas de notificación para cada responsable
      Seguimiento de cumplimiento de las agendas realizadas 
      Reagendamiento de no asistencia
      Entrega de data en panel de cliente en tiempo real 
      Poscalificación opcional de gestión comercial
      Reporte de gestión y calificación
      `,
    },
  ];

  onSelectCard = (id, desc, title) => {
    let check = document.getElementById(id);
    if (check.click) {
      let descCard = document.getElementById('adicionesCard');
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
