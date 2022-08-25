import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarButtomComponent } from './bar-buttom.component';

describe('BarButtomComponent', () => {
  let component: BarButtomComponent;
  let fixture: ComponentFixture<BarButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarButtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
