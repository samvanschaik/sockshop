import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SockCreationComponent } from './sock-creation.component';

describe('SockCreationComponent', () => {
  let component: SockCreationComponent;
  let fixture: ComponentFixture<SockCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SockCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SockCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
