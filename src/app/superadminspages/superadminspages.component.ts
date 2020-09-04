import { Component } from '@angular/core';
import _ from 'lodash';
import { MENU_ITEMS } from './superadminspages-menu';
import { of } from 'rxjs';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['superadminspages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class SuperAdminsPagesComponent {

  menu: any;
  constructor(){
    this.menu = MENU_ITEMS;
  }
}