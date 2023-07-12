import { TestBed } from '@angular/core/testing';

import { OrderCosturaService } from './order-costura.service';

describe('OrderCosturaService', () => {
  let service: OrderCosturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderCosturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
