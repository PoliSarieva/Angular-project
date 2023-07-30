import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayReceptComponent } from './day-recept.component';

describe('DayReceptComponent', () => {
  let component: DayReceptComponent;
  let fixture: ComponentFixture<DayReceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayReceptComponent]
    });
    fixture = TestBed.createComponent(DayReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
