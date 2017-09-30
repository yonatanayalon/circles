import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { CircleListComponent } from './circle-list.component';

// Services
import { CircleStoreService } from '../services/circle.service';

// Model
import { Circle } from '../models/circle';
import {CircleStore} from '../models/circle-store';

describe('CircleListComponent', () => {
  let component: CircleListComponent;
  let fixture: ComponentFixture<CircleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CircleListComponent ],
      providers: [CircleStoreService, CircleStore],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
