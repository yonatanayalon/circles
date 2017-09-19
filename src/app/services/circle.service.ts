import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

// Models
import {Circle} from "../models/circle";

@Injectable()
export class CircleStoreService {
  circles: Circle[] = [];

  addCircle(x:number,y:number,r:number):Observable<Circle[]> {
    let circle = new Circle(x,y,r);
    this.circles.push(circle);

    return Observable.of(this.circles);
  }
}
