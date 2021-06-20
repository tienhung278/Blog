import { TestBed } from '@angular/core/testing';

import { EventlogService } from './eventlog.service';

describe('EventlogService', () => {
  let service: EventlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
