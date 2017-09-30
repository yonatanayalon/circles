import {Circle} from './circle';

export class CircleStore extends Circle {
  overlappingCircles: Array<Circle[]> = [];
  constructor() {
    super();
  }
  circles: Circle[] = [];

  addCircle(circle: Circle) {
    this.circles.push(circle);
  }

  getOverlapingCircles(circle: Circle): Circle[] {
    const currentCircle = circle;
    const overlappingCircles = [];

    if (this.overlappingCircles[circle.id]) {
      return this.overlappingCircles[circle.id];
    }

    for (let i = 0; i < this.circles.length; i++) {
      const circleInStore = this.circles[i];
      if (currentCircle !== circleInStore) {
        const isOverlapping = currentCircle.isOverlapping(circleInStore);
        if (isOverlapping) {
          overlappingCircles.push(circleInStore);
          this.overlappingCircles[circle.id] = this.overlappingCircles[circle.id] ? this.overlappingCircles[circle.id] : [];
          this.overlappingCircles[circle.id].push(circleInStore);
        }
      }
    }

    return overlappingCircles;
  }
}
