import { Component } from '@angular/core';
import _ from 'lodash';
import { MENU_ITEMS } from './pages-menu';

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
    let modulePages = [];
    let singlePages = [];
    let userMods = JSON.parse(localStorage.getItem('userInfo')).modules;
    _.forEach(userMods, (item) => {
      if(item.parent != undefined){
        if(modulePages[item.parent] == undefined){
          modulePages[item.parent] = {title: item.parent, icon: 'layout-outline', children : []};
        }
        modulePages[item.parent]['children'].push(item) 
      }else{
        singlePages.push(item)
      }
      inc++;
      if(inc == userMods.length){
        let finalArr = [];
        for(let i in modulePages){
          finalArr.push(modulePages[i]);
          if(Object.keys(modulePages).length == finalArr.length){
            const array3 = [...finalArr, ...singlePages];
            this.menu = array3
          }
        }
      }
    });
  }
}