import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDiagnosisComponent } from './item-diagnosis.component';

describe('ItemDiagnosisComponent', () => {
  let component: ItemDiagnosisComponent;
  let fixture: ComponentFixture<ItemDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDiagnosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
