import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingAdminComponent } from './shopping-admin.component';

describe('ShoppingAdminComponent', () => {
  let component: ShoppingAdminComponent;
  let fixture: ComponentFixture<ShoppingAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
