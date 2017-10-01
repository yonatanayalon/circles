import {Circle} from './circle';

export class CircleStore extends Circle {
  overlappingCircles: Array<Circle[]> = [];
  notOverlappingCircles: Array<Circle[]> = [];
  constructor() {
    super();
  }
  circles: Circle[] = [];


  addCircle(circle: Circle) {
    this.circles.push(circle);
  }

  getOverlapingCircles(circle: Circle): Circle[] {
    if (this.circles.length === 0) {
      return [];
    }
    let circles = this.circles;
    const currentCircle = circle;
    const overlappingCircles = [];
    this.overlappingCircles[circle.id] = this.overlappingCircles[circle.id] ? this.overlappingCircles[circle.id] : [];
    this.notOverlappingCircles[circle.id] = this.notOverlappingCircles[circle.id] ? this.notOverlappingCircles[circle.id] : [];

    const overlappingCirclesLength = this.overlappingCircles[circle.id].length;
    const notOverlappingCirclesLength = this.notOverlappingCircles[circle.id].length;

    // check to see if cached list has the same amount of objects as in all circles
    if ((overlappingCirclesLength + notOverlappingCirclesLength) === this.circles.length) {
      return this.overlappingCircles[circle.id]; // return cached overlapping circles
    }

    const indexTo = overlappingCirclesLength + notOverlappingCirclesLength;
    if (indexTo > 0) {
      circles = this.circles.splice(0, indexTo); // remove already known overlapping circles
    }


    for (let i = 0; i < circles.length; i++) {
      const circleInStore = circles[i];
      if (currentCircle !== circleInStore) {
        const isOverlapping = currentCircle.isOverlapping(circleInStore);
        if (isOverlapping) {
          overlappingCircles.push(circleInStore);
          this.overlappingCircles[circle.id].push(circleInStore);
        }
        else {
          this.notOverlappingCircles[circle.id].push(circleInStore);
        }
      }
    }

    return overlappingCircles;
  }
}
