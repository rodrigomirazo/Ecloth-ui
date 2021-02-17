import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentAnswersComponent } from './frequent-answers.component';

describe('FrequentAnswersComponent', () => {
  let component: FrequentAnswersComponent;
  let fixture: ComponentFixture<FrequentAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequentAnswersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
