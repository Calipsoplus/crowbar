import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteDesktopViewerComponent } from './remote-desktop-viewer.component';

describe('RemoteDesktopViewerComponent', () => {
  let component: RemoteDesktopViewerComponent;
  let fixture: ComponentFixture<RemoteDesktopViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteDesktopViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteDesktopViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
