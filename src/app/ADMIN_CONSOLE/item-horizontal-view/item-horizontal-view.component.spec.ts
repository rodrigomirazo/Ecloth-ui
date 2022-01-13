import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHorizontalViewComponent } from './item-horizontal-view.component';

describe('ItemHorizontalViewComponent', () => {
  let component: ItemHorizontalViewComponent;
  let fixture: ComponentFixture<ItemHorizontalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemHorizontalViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemHorizontalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
