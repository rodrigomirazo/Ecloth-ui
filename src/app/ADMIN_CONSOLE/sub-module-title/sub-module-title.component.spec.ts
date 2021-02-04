import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubModuleTitleComponent } from './sub-module-title.component';

describe('SubModuleTitleComponent', () => {
  let component: SubModuleTitleComponent;
  let fixture: ComponentFixture<SubModuleTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubModuleTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubModuleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
