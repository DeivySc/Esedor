import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  dataService = [
    {title: 'Consultoría estratégica & investigación', description: 'Ayudamos a definir la estrategia para transformar tu negocio y alcanzar la madurez digital.'},
    {title: 'Diseño de productos y servicios', description: 'Soluciones orientadas a mejorar la experiencia de tus clientes en canales digitales y presenciales.'},
    {title: 'Sistemas de diseño y branding', description: 'Gestiona la identidad visual de tu producto digital unificanto branding, experiencia de usuario y desarrollo en un solo lugar.'},
    {title: 'Innovación y transformación digital', description: 'Ayudamos a definir la estrategia para transformar tu negocio y alcanzar la madurez digital.'},
    {title: 'Desarrollo de software y código creativo', description: 'Implementamos tecnologías emergentes desde la agilidad para generar resultados reales.'},
  ]

  titulos = [
    {title1: 'PRIMAX', title2: 'SOLUTIONS'},
    {title1: 'RIPLEY', title2: 'PUNTOS'},
    {title1: 'REDEBAN', title2: 'COLOMBIA'},
  ];

  empresas = [
    {title: 'Niubiz(Ex VisanetPerú)', descripcion: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', img: 'assets/img/empresas/logoniubiz.png', alt: 'niubiz'},
    {title: 'Caja Cusco', descripcion: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', img: 'assets/img/empresas/logoCajaCusco.png', alt: 'CajaCuzco'},
    {title: 'Redeban', descripcion: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', img: 'assets/img/empresas/LogoRedeban.png', alt: 'Redeban'},
    {title: 'Ripley', descripcion: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', img: 'assets/img/empresas/LogoRipley.png', alt: 'Ripley'},
    {title: 'Primax', descripcion: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', img: 'assets/img/empresas/primaxlogo.png', alt: 'Primax'},

    {title: 'Niubiz(Ex VisanetPerú)', descripcion: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', img: 'assets/img/empresas/logoniubiz.png', alt: 'niubiz'},
    {title: 'Caja Cusco', descripcion: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', img: 'assets/img/empresas/logoCajaCusco.png', alt: 'CajaCuzco'},
  ]

  changeCounter = 0;
  actualprimero!: string;
  actualsegundo!: string;

  starproject_1 = true;
  starproject_2 = false;
  starproject_3 = false;
  starproject_4 = false;

  constructor(private _vps: ViewportScroller) { }

  scrollFn(anchor: string): void{
    this._vps.scrollToAnchor(anchor)
  }

  header_variable=false;
  @HostListener("document:scroll")
  scrollFuntion(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable = true;
    }else {
      this.header_variable = false;
    }
  }

  ngOnInit(): void {
    this.actualprimero = this.titulos[0].title1;
    this.actualsegundo = this.titulos[0].title2;
    setInterval(() => {
      this.changeCounter++;
      if (this.changeCounter > this.titulos.length -1) {
        this.changeCounter = 0;
      }
      this.actualprimero = this.titulos[this.changeCounter].title1;
      this.actualsegundo = this.titulos[this.changeCounter].title2;
    }, 5000);
  }

}
