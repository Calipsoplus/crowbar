import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualMachinesComponent } from './virtual-machines.component';

describe('VirtualMachinesComponent', () => {
  let component: VirtualMachinesComponent;
  let fixture: ComponentFixture<VirtualMachinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualMachinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
