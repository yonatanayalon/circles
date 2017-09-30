import { Component, OnInit } from '@angular/core';
import {Circle} from '../models/circle';

// Services
import { CircleStoreService } from '../services/circle.service';

@Component({
  selector: 'app-circle-list',
  templateUrl: './circle-list.component.html',
  styleUrls: ['./circle-list.component.css']
})
export class CircleListComponent implements OnInit {
  circles: Circle[];
  newCircle: Circle = new Circle(0,0,30);
  constructor(private circleStoreService: CircleStoreService) { }

  ngOnInit() {

  }

  addCircle(userSelection) {
    const x = this.newCircle.x;
    const y = this.newCircle.y;
    const r = this.newCircle.r;

    this.circleStoreService.addCircle(x, y, r).subscribe((circles) => {
      this.circles = circles;
    });
  }
}
