import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SockModifyComponent } from './sock-modify.component';

describe('SockModifyComponent', () => {
  let component: SockModifyComponent;
  let fixture: ComponentFixture<SockModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SockModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SockModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
