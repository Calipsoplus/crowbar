import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JupyterhubComponent } from './jupyterhub.component';

describe('JupyterhubComponent', () => {
  let component: JupyterhubComponent;
  let fixture: ComponentFixture<JupyterhubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JupyterhubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JupyterhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
