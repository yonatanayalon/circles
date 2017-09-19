export class Circle {
  x: number = 10;
  y: number = 20;
  r: number = 30;

  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  isOverlapping(circle:Circle) {
    if (this.x === circle.x && this.y === circle.y) { // check if circle axis are equals to current circle instance
      return true;
    }
    let d = ((this.x-circle.x)^2) + ((this.y-circle.y)^2);

    return (d <= (circle.r^2));
  }
}
