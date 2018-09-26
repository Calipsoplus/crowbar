import { TestBed, inject } from '@angular/core/testing';

import { VirtualmachineService } from './virtualmachine.service';

describe('VirtualmachineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VirtualmachineService]
    });
  });

  it('should be created', inject([VirtualmachineService], (service: VirtualmachineService) => {
    expect(service).toBeTruthy();
  }));
});
