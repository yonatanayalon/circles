import { TestBed, inject } from '@angular/core/testing';

import { CircleStoreService } from './circle.service';
import { Circle } from '../models/circle';
import { CircleStore } from '../models/circle-store';


describe('CircleStoreService', () => {
  var circle1
  var circle2
  var overlapingCircle1
  var overlapingCircle2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CircleStoreService]
    });
    circle1 = new Circle(100, 200, 10);
    circle2 = new Circle(10, 20, 10);
    overlapingCircle1 = new Circle(100,20,30);
    overlapingCircle2 = new Circle(20,21,60);

  });

  it('should be created', inject([CircleStoreService], (service: CircleStoreService) => {
    expect(service).toBeTruthy();
  }));

  // Circle
  it('Circle instance - should create a circle', () => {
    expect(circle1).toEqual(jasmine.any(Circle)); // check if returned object is Circle
    expect(circle1.x).toBe(100);
    expect(circle1.y).toBe(200);
    expect(circle1.r).toBe(10);
  });

  it('Circle isOverlapping - Overlaping should be true', () => {
    let isOverlaping = circle1.isOverlapping(overlapingCircle1);

    expect(isOverlaping).toBe(true);
  });

  it('Circle isOverlapping - Overlaping should be false', () => {
    let isOverlaping = circle1.isOverlapping(circle2);

    expect(isOverlaping).toBe(false);
  });

  // CircleStore
  it('CircleStore addCircle - Add 1 Circle', () => {
    let circleStore = new CircleStore();
    let circles:Circle[] = circleStore.circles;

    expect(circles.length).toBe(0);

    circleStore.addCircle(circle1);

    expect(circles.length).toBe(1);
  });

  it('CircleStore addCircle - Add 2 Circles', () => {
    let circleStore = new CircleStore();
    let circles:Circle[] = circleStore.circles;

    expect(circles.length).toBe(0);

    circleStore.addCircle(circle1);

    expect(circles.length).toBe(1);

    circleStore.addCircle(circle2);

    expect(circles.length).toBe(2);

  });

  it('CircleStore getOverlapingCircles - Add 2 Overlaping Circles - check if returned list has the Overlap circle', () => {
    let circleStore = new CircleStore();
    let circles:Circle[] = circleStore.circles;

    expect(circles.length).toBe(0);

    circleStore.addCircle(circle1);

    expect(circles.length).toBe(1);

    circleStore.addCircle(overlapingCircle1);

    expect(circles.length).toBe(2);

    let overlapingCircleList = circleStore.getOverlapingCircles(circle1)

    expect(overlapingCircleList).toEqual([overlapingCircle1]);

  });

  it('CircleStore getOverlapingCircles - check running time of getOverlapingCircles method', () => {
    let circleStore = new CircleStore();
    let circles:Circle[] = circleStore.circles;
    let startTime:any;
    let endTime:any;
    let runningTime:Number;
    let maxRunningTimeMilliseconds = 20;
    let numberOfCirclesToCreate = 1000000;

    for (let i=0;i<numberOfCirclesToCreate;i++) {
      let randNumber = (Math.random());
      let circle = new Circle(randNumber, randNumber+1, randNumber+2);
      circleStore.addCircle(circle);
    }

    startTime = new Date();
    // Start
    circleStore.getOverlapingCircles(circle1)
    // End
    endTime = new Date();

    runningTime = Math.abs(endTime - startTime);

    expect(runningTime).toBeLessThan(maxRunningTimeMilliseconds);

  });
});
