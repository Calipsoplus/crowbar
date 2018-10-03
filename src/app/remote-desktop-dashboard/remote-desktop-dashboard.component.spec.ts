import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteDesktopDashboardComponent } from './remote-desktop-dashboard.component';

describe('RemoteDesktopDashboardComponent', () => {
  let component: RemoteDesktopDashboardComponent;
  let fixture: ComponentFixture<RemoteDesktopDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteDesktopDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteDesktopDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
