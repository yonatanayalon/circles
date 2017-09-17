import { TestBed, inject } from '@angular/core/testing';

import { CircleServiceService } from './circle-service.service';

describe('CircleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CircleServiceService]
    });
  });

  it('should be created', inject([CircleServiceService], (service: CircleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
