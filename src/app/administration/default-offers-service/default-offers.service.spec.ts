import { TestBed, inject } from '@angular/core/testing';

import { DefaultOffersService } from './default-offers.service';

describe('DefaultOffersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultOffersService]
    });
  });

  it('should ...', inject([DefaultOffersService], (service: DefaultOffersService) => {
    expect(service).toBeTruthy();
  }));
});
