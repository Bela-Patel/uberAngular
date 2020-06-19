import { TestBed } from '@angular/core/testing';

import { CallnodejsService } from './callnodejs.service';

describe('CallnodejsService', () => {
  let service: CallnodejsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallnodejsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
