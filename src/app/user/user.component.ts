import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment'
import { env } from 'process';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  opened = true;
  username: String = "";
  filePath: String = "";
  logo:  String = "";
  constructor() {
    console.log(environment.apiUrl)
  }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('userInfo'));
    this.filePath = environment.apiUrl;
    this.logo = environment.apiUrl + JSON.parse(localStorage.getItem('userInfo'));
  }

  ngOnDestroy() {
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }

}
