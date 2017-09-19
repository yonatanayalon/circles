import {Circle} from "./circle";

export class CircleStore {
  circles: Circle[] = [];
  addCircle(circle: Circle) {
    this.circles.push(circle);
  }

  private isOverlapping(currentCircle:Circle, targetCircle:Circle):boolean {
    if (currentCircle.x === targetCircle.x || currentCircle.y === targetCircle.y) { // check if targetCircle axis are equals to currentCircle
      return true;
    }

    let dimension = ((currentCircle.x-targetCircle.x)^2) + ((currentCircle.y-targetCircle.y)^2);

    return (dimension <= (targetCircle.r^2));
  }
  getOverlapingCircles(circle:Circle): Circle[] {
    let currentCircle = circle;
    let overlappingCircles = [];
    for (let i=0;i<this.circles.length;i++) {
      let circle = this.circles[i];
      if (currentCircle !== circle) {
        let isOverlapping = this.isOverlapping(currentCircle, circle);
        if (isOverlapping) {
          overlappingCircles.push(circle);
        }
      }
    }

    return overlappingCircles;
  }
}
