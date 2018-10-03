import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteDesktopComponent } from './remote-desktop.component';

describe('RemoteDesktopComponent', () => {
  let component: RemoteDesktopComponent;
  let fixture: ComponentFixture<RemoteDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
