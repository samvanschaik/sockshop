import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SockDisplayComponent } from './sock-display.component';

describe('SockDisplayComponent', () => {
  let component: SockDisplayComponent;
  let fixture: ComponentFixture<SockDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SockDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SockDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
