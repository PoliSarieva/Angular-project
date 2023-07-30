import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReceptComponent } from './main-recept.component';

describe('MainReceptComponent', () => {
  let component: MainReceptComponent;
  let fixture: ComponentFixture<MainReceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainReceptComponent]
    });
    fixture = TestBed.createComponent(MainReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
