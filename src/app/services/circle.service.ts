import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// Models
import {Circle} from '../models/circle';
import {CircleStore} from '../models/circle-store';


@Injectable()
export class CircleStoreService {
  circles: Circle[] = [];
  circleStore: CircleStore;

  constructor(circleStore: CircleStore) {
    this.circleStore = new CircleStore();
  }


  addCircle(x: number, y: number, r: number): Observable<Circle[]> {
    const circle = new Circle(x, y, r);
    this.circleStore.addCircle(circle);
    const overlapingCircles = this.circleStore.getOverlapingCircles(circle);
    if (overlapingCircles.length > 0) {
      circle.isOverlap = true;
    }


    this.circles.push(circle);

    return Observable.of(this.circles);
  }
}
