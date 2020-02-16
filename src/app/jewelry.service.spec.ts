/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JewelryService } from './jewelry.service';

describe('Service: Jewelry', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JewelryService]
    });
  });

  it('should ...', inject([JewelryService], (service: JewelryService) => {
    expect(service).toBeTruthy();
  }));
});
