import { Injectable } from '@angular/core';

// Model
import {Circle} from "../circle";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class CircleServiceService {
  circles: Circle[] = [];
  overlappingCircles: Circle[] = [];

  constructor() { }

  addCircle(x:number,y:number,r:number):Observable<Circle[]> {
    let circle = new Circle();
    circle.x = x;
    circle.y = y;
    circle.r = r;
    this.circles.push(circle);

    return Observable.of(this.circles);
  }
  getAllCircles():Circle[] {
    return this.circles;
  }
  getOverlapingCircles(circle:Circle): Circle[] {
    let currentCircle = circle;
    for (let i=0;i<this.circles.length;i++) {
      let circle = this.circles[i];


      let circleisOverlaping = ((currentCircle.r-circle.r)^2) <= ((currentCircle.x-circle.x)^2)+((currentCircle.y-circle.y)^2) <= ((currentCircle.r+circle.r)^2)

      if (circleisOverlaping) {
        this.overlappingCircles.push(circle);
      }
    }

    return this.overlappingCircles;
  }
  isOverlapping(circle:Circle):boolean {

    return false;
  }
}
