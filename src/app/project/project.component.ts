import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  empresas = [
    {name: 'Primax', descripcion: 'Pagos simples', img: 'assets/img/project/project01.png', alt: 'Primax', tipo: 'automotriz'},
    {name: 'Redeban', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project02.png', alt: 'Redeban', tipo: 'banca'},
    {name: 'Niubiz', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project03.png', alt: 'Niubiz', tipo: 'ecomerce'},
    {name: 'Ripley', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project04.png', alt: 'Ripley', tipo: 'ecomerce'},
    {name: 'Notifai', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project01.png', alt: 'Notifai', tipo: 'ecomerce'},
    {name: 'Caja Metropolitana', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project02.png', alt: 'Caja Metropolitana', tipo: 'banca'}
  ]

  filtrado = this.empresas;

  filterEmpresas(value: string){
    if (value === 'todos'){
      this.filtrado = this.empresas
    }else {
      this.filtrado = this.empresas.filter(empresa => empresa.tipo === value);
      console.log(this.filtrado);
    }
  }

  constructor() { }

  starproject_1 = true;
  starproject_2 = false;
  starproject_3 = false;
  starproject_4 = false;

  ngOnInit(): void {
  }

}
