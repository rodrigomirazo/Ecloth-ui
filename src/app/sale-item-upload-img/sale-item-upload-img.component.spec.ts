import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SaleItemUploadImgComponent } from './sale-item-upload-img.component';

describe('SaleItemUploadImgComponent', () => {
  let component: SaleItemUploadImgComponent;
  let fixture: ComponentFixture<SaleItemUploadImgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleItemUploadImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleItemUploadImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
