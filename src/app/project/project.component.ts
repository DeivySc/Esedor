import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  empresas = [
    {name: 'Primax', descripcion: 'Pagos simples', img: 'assets/img/project/project01.png', alt: 'Primax'},
    {name: 'Redeban', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project02.png', alt: 'Redeban'},
    {name: 'Niubiz', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project03.png', alt: 'Niubiz'},
    {name: 'Ripley', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project04.png', alt: 'Ripley'},
    {name: 'Notifai', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project01.png', alt: 'Notifai'},
    {name: 'Caja Metropolitana', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project02.png', alt: 'Caja Metropolitana'}
  ]

  constructor() { }

  starproject_1 = true;
  starproject_2 = false;
  starproject_3 = false;
  starproject_4 = false;

  ngOnInit(): void {
  }

}
