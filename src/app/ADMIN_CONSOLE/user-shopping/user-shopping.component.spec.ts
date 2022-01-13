import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShoppingComponent } from './user-shopping.component';

describe('UserShoppingComponent', () => {
  let component: UserShoppingComponent;
  let fixture: ComponentFixture<UserShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
