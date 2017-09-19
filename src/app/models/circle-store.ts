import {Circle} from './circle';

export class CircleStore {
  circles: Circle[] = [];
  addCircle(circle: Circle) {
    this.circles.push(circle);
  }

  private isOverlapping(currentCircle: Circle, targetCircle: Circle): boolean {
    if (currentCircle.x === targetCircle.x || currentCircle.y === targetCircle.y) { // check if targetCircle axis are equals to currentCircle
      return true;
    }

    const d = ((currentCircle.x - targetCircle.x) ^ 2) + ((currentCircle.y - targetCircle.y) ^ 2);

    return (d <= (targetCircle.r ^ 2));
  }
  getOverlapingCircles(circle: Circle): Circle[] {
    const currentCircle = circle;
    const overlappingCircles = [];
    for (let i = 0; i < this.circles.length; i++) {
      const circle = this.circles[i];
      if (currentCircle !== circle) {
        const isOverlapping = this.isOverlapping(currentCircle, circle);
        if (isOverlapping) {
          overlappingCircles.push(circle);
        }
      }
    }

    return overlappingCircles;
  }
}
