import { Component, OnInit } from '@angular/core';
import {Circle} from "../circle";

// Services
import { CircleServiceService } from '../services/circle-service.service';

@Component({
  selector: 'app-circle-list',
  templateUrl: './circle-list.component.html',
  styleUrls: ['./circle-list.component.css']
})
export class CircleListComponent implements OnInit {
  circles: Circle[];
  newCircle:Circle = new Circle();
  constructor(private circleServiceService: CircleServiceService) { }

  ngOnInit() {
    // let circle1 = {'x':10,'y':20,'r':30};
    // let circle2 = {'x':0,'y':10,'r':30};
    // this.circles = [circle1,circle2];
  }

  addCircle(userSelection) {
    let x = this.newCircle.x;
    let y = this.newCircle.y;
    let r = this.newCircle.r;

    this.circleServiceService.addCircle(x,y,r).subscribe((circles)=>{
      this.circles = circles;
    })
  }
}
