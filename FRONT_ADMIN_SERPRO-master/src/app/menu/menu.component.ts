import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Crear Modelo', icon: 'pi pi-fw pi-pencil', routerLink: ['/addModule']},
      {label: 'Crear Prueba', icon: 'pi pi-fw pi-pencil', routerLink: ['/addTest']},
      {label: 'Crear Pregunta', icon: 'pi pi-fw pi-pencil', routerLink: ['/addQuestion']}
    ]
  }

}
