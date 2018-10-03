import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { VirtualmachineService } from './virtualmachine.service';
import {Virtualmachine} from './models/virtualmachine';

describe('VirtualmachineService', () => {
  let service: VirtualmachineService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VirtualmachineService]
    });

    service = TestBed.get(VirtualmachineService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach( () => {
    httpMock.verify();
  })

  it('should retrieve virtual machines from api via GET', function () {
    const dummyVms: Virtualmachine[] = [
      {ip: '192.168.2.3', hostname: 'aidan-ubuntu', owner: 'aidan'},
      {ip: '192.168.2.4', hostname: 'aidan-deb', owner: 'aidan'},
      {ip: '192.168.2.5', hostname: 'aidan-fed', owner: 'aidan'},
      {ip: '192.168.2.6', hostname: 'aidan-centos', owner: 'aidan'}

    ];

    service.getVirtualMachines().subscribe(virtualmachines => {
       expect(virtualmachines.length).toBe(4);
       expect(virtualmachines).toEqual(dummyVms);
    });

    const request = httpMock.expectOne(`${service.apiUrl}/virtualmachines/user`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyVms);

});
});
