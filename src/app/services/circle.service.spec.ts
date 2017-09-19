import { TestBed, inject } from '@angular/core/testing';

import { CircleStoreService } from './circle.service';
import { Circle } from '../models/circle';
import { CircleStore } from '../models/circle-store';


describe('CircleStoreService', () => {
  let circle1;
  let circle2;
  let overlapingCircle1;
  let overlapingCircle2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CircleStoreService]
    });
    circle1 = new Circle(100, 200, 60);
    circle2 = new Circle(10, 20, 60);
    overlapingCircle1 = new Circle(100, 190, 60);
    overlapingCircle2 = new Circle(20, 21, 60);

  });

  it('should be created', inject([CircleStoreService], (service: CircleStoreService) => {
    expect(service).toBeTruthy();
  }));

  // Circle
  it('Circle instance - should create a circle', () => {
    expect(circle1).toEqual(jasmine.any(Circle)); // check if returned object is Circle
    expect(circle1.x).toBe(100);
    expect(circle1.y).toBe(200);
    expect(circle1.r).toBe(60);
  });

  it('Circle isOverlapping - Overlaping should be true', () => {
    const isOverlaping = circle1.isOverlapping(overlapingCircle1);

    expect(isOverlaping).toBe(true);
  });

  it('Circle isOverlapping - Overlaping should be false', () => {
    const isOverlaping = circle1.isOverlapping(circle2);

    expect(isOverlaping).toBe(false);
  });

  // CircleStore
  it('CircleStore addCircle - Add 1 Circle', () => {
    const circleStore = new CircleStore();
    const circles: Circle[] = circleStore.circles;

    expect(circles.length).toBe(0);

    circleStore.addCircle(circle1);

    expect(circles.length).toBe(1);
  });

  it('CircleStore addCircle - Add 2 Circles', () => {
    const circleStore = new CircleStore();
    const circles: Circle[] = circleStore.circles;

    expect(circles.length).toBe(0);

    circleStore.addCircle(circle1);

    expect(circles.length).toBe(1);

    circleStore.addCircle(circle2);

    expect(circles.length).toBe(2);

  });

  it('CircleStore getOverlapingCircles - Add 2 Overlaping Circles - check if returned list has the Overlap circle', () => {
    const circleStore = new CircleStore();
    const circles: Circle[] = circleStore.circles;

    expect(circles.length).toBe(0);

    circleStore.addCircle(circle1);

    expect(circles.length).toBe(1);

    circleStore.addCircle(overlapingCircle1);

    expect(circles.length).toBe(2);

    const overlapingCircleList = circleStore.getOverlapingCircles(circle1);

    expect(overlapingCircleList).toEqual([overlapingCircle1]);

  });

  it('CircleStore getOverlapingCircles - check running time of getOverlapingCircles method', () => {
    const circleStore = new CircleStore();
    const circles: Circle[] = circleStore.circles;
    let startTime: any;
    let endTime: any;
    let runningTime: Number;
    const maxRunningTimeMilliseconds = 20;
    const numberOfCirclesToCreate = 1000000;

    for (let i = 0; i < numberOfCirclesToCreate; i++) {
      const randNumber = (Math.random());
      const circle = new Circle(randNumber, randNumber + 1, randNumber + 2);
      circleStore.addCircle(circle);
    }

    startTime = new Date();
    // Start
    circleStore.getOverlapingCircles(circle1);
    // End
    endTime = new Date();

    runningTime = Math.abs(endTime - startTime);

    expect(runningTime).toBeLessThan(maxRunningTimeMilliseconds);

  });
});
