import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingFollowUpComponent } from './shopping-follow-up.component';

describe('ShoppingFollowUpComponent', () => {
  let component: ShoppingFollowUpComponent;
  let fixture: ComponentFixture<ShoppingFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingFollowUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
