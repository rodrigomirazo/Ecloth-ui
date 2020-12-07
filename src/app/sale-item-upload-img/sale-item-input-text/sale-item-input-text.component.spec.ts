import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleItemInputTextComponent } from './sale-item-input-text.component';

describe('SaleItemInputTextComponent', () => {
  let component: SaleItemInputTextComponent;
  let fixture: ComponentFixture<SaleItemInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleItemInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleItemInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
