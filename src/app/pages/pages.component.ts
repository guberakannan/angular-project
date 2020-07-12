import { Component } from '@angular/core';
import _ from 'lodash';
import { MENU_ITEMS } from './pages-menu';
import { userInfo } from 'os';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu: any;
  constructor(){
    let inc= 0;
    let sideBar = []; 
    _.forEach(MENU_ITEMS, (item) => {
      let userMods = JSON.parse(localStorage.getItem('userInfo')).modules;
      if(userMods.indexOf(item.link) > -1){
        sideBar.push(item)
      }
      inc++;

      if(inc == MENU_ITEMS.length){
        this.menu = sideBar;
      }
    });
  }
}
