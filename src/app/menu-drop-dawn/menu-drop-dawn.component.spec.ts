import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuDropDawnComponent } from './menu-drop-dawn.component';

describe('MenuDropDawnComponent', () => {
  let component: MenuDropDawnComponent;
  let fixture: ComponentFixture<MenuDropDawnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDropDawnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDropDawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
