/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommuncationService } from './communcation.service';

describe('Service: Communcation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommuncationService]
    });
  });

  it('should ...', inject([CommuncationService], (service: CommuncationService) => {
    expect(service).toBeTruthy();
  }));
});
