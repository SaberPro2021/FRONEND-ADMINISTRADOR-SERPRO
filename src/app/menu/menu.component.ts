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
  email : string;
  job : string;

  constructor() {
    this.email = sessionStorage.getItem('emailSession');
    this.job = sessionStorage.getItem('jobUser');
   }

  ngOnInit(): void {
    this.items = [
      {label: 'SerProAdmin', icon: 'pi pi-fw pi-cog'},
      {label: 'Nuevo Módulo', icon: 'pi pi-fw pi-pencil', routerLink: ['/addModule']},
      {label: 'Nueva Prueba', icon: 'pi pi-fw pi-pencil', routerLink: ['/addTest']},
      {label: 'Nueva Pregunta', icon: 'pi pi-fw pi-pencil', routerLink: ['/addQuestion']}
    ]
  }
}
