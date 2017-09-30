export class Circle {
  id: number;
  x: number;
  y: number;
  r: number;
  isOverlap = false;

  constructor(x?: number, y?: number, r?: number) {
    if (x !== null && y !== null && r !== null) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.id = new Date().getTime() + Math.random();
    }
  }

  isOverlapping(circle: Circle) {
    const minusRaduis = Math.pow((this.r - circle.r),2);
    const sumAxis = Math.pow((this.x - circle.x), 2) + Math.pow((this.y - circle.y), 2);
    const plusRaduis = Math.pow((this.r + circle.r), 2);

    if (this.x === circle.x && this.y === circle.y) { // check if circle center is tha same
      return true;
    }
    else if (sumAxis <= plusRaduis) {
      if (minusRaduis <= sumAxis) {
        return true;
      }
    }
    return false;
  }
}
