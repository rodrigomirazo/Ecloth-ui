import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptVerificationComponent } from './intercept-verification.component';

describe('InterceptVerificationComponent', () => {
  let component: InterceptVerificationComponent;
  let fixture: ComponentFixture<InterceptVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
