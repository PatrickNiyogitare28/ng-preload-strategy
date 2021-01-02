import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomePreloadingStrategyService implements PreloadingStrategy{

  constructor() { }
  preload(route: Route, loadRouter: () => Observable<any>): Observable<any>{
    if(route.data && route.data.shouldPreload == true){
      return loadRouter();
    }
    return of(false);
  }
}
