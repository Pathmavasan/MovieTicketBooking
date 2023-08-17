import { TestBed } from '@angular/core/testing';

import { DataserviceService } from './dataservice.service';
import { Seat } from './seat/seat.component';
describe('DataserviceService', () => {
  let service: DataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataserviceService);
  });
it("Should get and set selected seat",()=>{
  const seats: Seat[] = [];
  service.setSelectedSeats(seats);
    expect(service.getSelectedSeats()).toEqual(seats);
});
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
