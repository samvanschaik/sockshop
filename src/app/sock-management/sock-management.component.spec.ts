import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SockManagementComponent } from './sock-management.component';

describe('SockManagementComponent', () => {
  let component: SockManagementComponent;
  let fixture: ComponentFixture<SockManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SockManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SockManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
