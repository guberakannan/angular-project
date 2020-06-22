import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptService {

  loader=new BehaviorSubject(false);
  loaderSub=this.loader.asObservable();
  constructor() { }
}
