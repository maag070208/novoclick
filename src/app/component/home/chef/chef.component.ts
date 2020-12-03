import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teamMembers = 
  [
    {
      img: '../../../../assets/images/novoclick_team/Sr Jorge Concha.png',
      type:'Jorge Concha',
      name:'CEO',
      desc:
      `
      Especialista en Growth Hacking y Marketing Digital con más de 20 años de reconocida trayectoria. Su prestigio le ha permitido ser reconocido como una autoridad en asuntos de Conversión Digital y Performance logrando posicionarse como un modelo a seguir
      en Colombia, Panamá, España, Perú, Chile y México. La consigna de su Slogan: “Consiga Clientes para su Empresa”
      `
    },
    {
      img: '../../../../assets/images/novoclick_team/Dario Bravo.png',
      type:'Gerente Comercial',
      name:'Dario Bravo',
      desc:
      `
      15 años de experiencia de proyectos digitales, desarrollo de productos, planeación e implementación de estrategias publicitarias.
      `
    },
    {
      img: '../../../../assets/images/novoclick_team/Wendy Franco.png',
      type:'Gerente de operaciones',
      name:'Wendy Franco',
      desc:
      `
      Amplia experiencia y liderazgo en la coordinación de todo el equipo de call center, contabilidad, comunicación con los comerciales, apoya el funcionamiento y cumplimiento de las campañas.
      `
    },
    {
      img: '../../../../assets/images/novoclick_team/Sergio Andres Restrepo.png',
      type:'Director de Marketing Digital',
      name:'Sergio Andrés Restrepo',
      desc:
      `
      Director con amplio conocimiento y experiencia en el desarrollo, ejecución, implementación, control, optimización y monitoreo las estrategias de marketing digital de Novoclick y de sus clientes finales.
      `
    }
  ]



  flipCard = () =>{
    var card = document.getElementById('cardTeam');
    card.className = 'flip-card';
  };

}
