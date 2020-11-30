import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    
  }
state: Boolean = false;

card = [{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 50.png',
    description: 'Plataforma donde realizamos almacenamiento y bases de datos.',
    title: 'AWS'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 51.png',
    description: 'Plataforma donde hacemos el mejor trabajo en equipo, compartimos archivos, gestionamos tareas, calendarios, dibujamos diagramas y editamos hojas de cálculo en tiempo real.',
    title: 'Samepage'

},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 52.png',
    description: 'Plataforma donde analizamos tu sitio web y el de tú competencia, desde arquitectura, url´s y mucho más.',
    title: 'seigo'

},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 53.png',
    description: 'Plataforma donde analizamos tú sitio web, nos mantenemos al día con tu competencia y sabemos que posición ocupa tu marca en el mercado.',
    title: 'Similar Web'

},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 54.png',
    description: 'Plataforma donde hacemos mapas de calor para optimizar tus ventas.',
    title: 'H°TMAPS'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 55.png',
    description: 'Plataforma donde optimizamos tus páginas web, medimos interacciones de los visitantes, comportamiento de usuario, contenidos de más interés, etc.',
    title: 'hotjar'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 56.png',
    description: 'Plataforma donde descubrimos contenidos más compartidos, rastreamos marcas, competencia, backlinks, identificamos influencers de tu sector y generamos informes de análisis por asunto.',
    title: 'BuzzSumo'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 57.png',
    description: 'Plataforma donde construímos aplicaciones móviles.',
    title: 'GetApp'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 58.png',
    description: 'Plataforma donde encontramos palabras claves y temas relevantes de contenido organico relacionado al tema de tu empresa.',
    title: 'Media Toolkit'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 59.png',
    description: 'Plataforma donde analizamos tu sitio web, aumentamos la visibilidad de este, analizamos datos de tu sitio para SEO, redes sociales, usabilidad y factores críticos.',
    title: 'woorank'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 60.png',
    description: 'Plataforma donde mapeamos embudos de ventas.',
    title: 'GERU'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 61.png',
    description: 'Plataforma donde nos conectamos con tu audiencia por el canal que tu quieras (email marketing, SMS,mensajería, web push, etc)',
    title: 'Send Pulse'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 62.png',
    description: 'Plataforma donde alcanzamos nuestros objetivos estratégicos efectivamente, mediante el impulso adecuado de tu empresa.',
    title: 'Bitrix24'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 63.png',
    description: 'Plataforma donde programamos tus publicaciones en diferentes redes sociales, generamos engagement con tus usuarios.',
    title: 'Buffer'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 64.png',
    description: 'Plataforma donde sabemos las palabras claves más buscadas en internet y posicionamos contenido de tu página web.',
    title: 'Google Trends'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 65.png',
    description: 'Plataforma donde monitoreamos el estado de tu sitio web, obtenemos tipos de información relevante.',
    title: 'Google Analytics'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 66.png',
    description: 'Plataforma donde seguimos el tráfico de visitas y datos de tú audiencia.',
    title: 'Yandex'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 68.png',
    description: 'Plataforma donde montamos servidores incluyecndo email, SMS, video conferencia, centro de llamada y funciones colaborativas.',
    title: 'Issabel'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 69.png',
    description: 'Plataforma donde gestinamos CRM.',
    title: 'Salesforce'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 69_1.png',
    description: 'Plataforma donde realizamos social media marketing, content management, web analytics y landing page.',
    title: 'HubSpot'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 71.png',
    description: 'Plataforma donde creamos webinars en vivo.',
    title: 'Webinar Ignition'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 72.png',
    description: 'Plataforma donde creamos webinars automatizados.',
    title: 'Everwebinar'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 72_1.png',
    description: 'Plataforma donde planificamos y elegimos las mejores palabras claves para tus campañas.',
    title: 'Google AdWords'
},
{
    img: '../../../../assets/images/herramientas/Mesa de trabajo 73.png',
    description: 'Plataforma donde realizamos reuniones y tranmisión del tema que quieras en vivo.',
    title: 'Zoom'
}]

rotateCard(id){
  let card = document.getElementById(id);
    switch (this.state){
      case false:
        console.log('%c'+ this.state, 'color: green; font-size: 1.5em');
        card = document.getElementById(id);
        card.classList.replace('noRotate','rotate');
        this.state = true;
        console.log('%c'+ this.state, 'color: red; font-size: 1.5em');
        console.log('%c'+ id, 'color: green; font-size: 1.5em');
        break;

      case true:
        console.log('%c'+ this.state, 'color: green; font-size: 1.5em');
        card = document.getElementById(id);
        card.classList.replace('rotate','noRotate');
        this.state = false;
        console.log('%c'+ this.state, 'color: red; font-size: 1.5em');
        console.log('%c'+ id, 'color: green; font-size: 1.5em');
        break;
    }

  }

  carrouselSlice(){
      let carrousel = document.getElementById('');
  }

}
