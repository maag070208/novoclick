import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css'],
})
export class ChefComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  teamMembers = [
    {
      img: '../../../../assets/images/novoclick_team/Sr Jorge Concha.png',
      type: 'CEO',
      name: 'Jorge Concha',
      desc: `
      Especialista en Growth Hacking y Marketing Digital con más de 20 años de reconocida trayectoria. Su prestigio le ha permitido ser reconocido como una autoridad en asuntos de Conversión Digital y Performance logrando posicionarse como un modelo a seguir
      en Colombia, Panamá, España, Perú, Chile y México. La consigna de su Slogan: “Consiga Clientes para su Empresa”
      `,
      id: 1,
    },
    {
      img: '../../../../assets/images/novoclick_team/Wendy Franco.png',
      type: 'Gerente de operaciones',
      name: 'Wendy Franco',
      desc: `
      Amplia experiencia y liderazgo en la coordinación de todo el equipo de call center, contabilidad, comunicación con los comerciales, apoya el funcionamiento y cumplimiento de las campañas.
      `,
      id: 2,
    },
    {
      img: '../../../../assets/images/novoclick_team/Dario Bravo.png',
      type: 'Gerente Comercial',
      name: 'Dario Bravo',
      desc: `
      15 años de experiencia de proyectos digitales, desarrollo de productos, planeación e implementación de estrategias publicitarias.
      `,
      id: 3,
    },
    {
      img:
        '../../../../assets/images/novoclick_team/Nataly Arias.png',
      type: 'Director de Marketing Digital',
      name: 'Natalia Arias',
      desc: `
      Director con amplio conocimiento y experiencia en el desarrollo, ejecución, implementación, control, optimización y monitoreo las estrategias de marketing digital de Novoclick y de sus clientes finales.
      `,
      id: 4,
    },
    {
      img:
        '../../../../assets/images/novoclick_team/Sergio Andres Restrepo.png',
      type: 'Director de Marketing Digital',
      name: 'Sergio Andrés Restrepo',
      desc: `
      Director con amplio conocimiento y experiencia en el desarrollo, ejecución, implementación, control, optimización y monitoreo las estrategias de marketing digital de Novoclick y de sus clientes finales.
      `,
      id: 5,
    },
    {
      img:
        '../../../../assets/images/novoclick_team/leonardo rivera.png',
      type: 'Director de Marketing Digital',
      name: 'Leonardo Rivera',
      desc: `
      Director con amplio conocimiento y experiencia en el desarrollo, ejecución, implementación, control, optimización y monitoreo las estrategias de marketing digital de Novoclick y de sus clientes finales.
      `,
      id: 6,
    },
    {
      img:
        '../../../../assets/images/novoclick_team/Laureano silva.png',
      type: 'Director de Marketing Digital',
      name: 'Laureano Silva',
      desc: `
      Director con amplio conocimiento y experiencia en el desarrollo, ejecución, implementación, control, optimización y monitoreo las estrategias de marketing digital de Novoclick y de sus clientes finales.
      `,
      id: 7,
    },
    {
      img:
        '../../../../assets/images/novoclick_team/Laura castañeda Prada.png',
      type: 'Director de Marketing Digital',
      name: 'Laura Castañeda',
      desc: `
      Director con amplio conocimiento y experiencia en el desarrollo, ejecución, implementación, control, optimización y monitoreo las estrategias de marketing digital de Novoclick y de sus clientes finales.
      `,
      id: 8,
    },
  ];
  state = 'front';
  rotateCard = (id) => {
    let cardId = document.getElementById(id);
    
    if(this.state == "front"){
      cardId.classList.replace('noRotate', 'rotate');
      this.state = 'back';

    }else if(this.state == "back"){
      this.state = 'front';
      cardId.classList.replace('rotate', 'noRotate');
    }


    setTimeout(()=>{ 
      cardId.classList.replace('rotate','noRotate');
      },3000);
  };
}
