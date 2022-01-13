import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemImagePreviewComponent } from './item-image-preview.component';

describe('ItemImagePreviewComponent', () => {
  let component: ItemImagePreviewComponent;
  let fixture: ComponentFixture<ItemImagePreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemImagePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemImagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
