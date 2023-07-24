import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReceptComponent } from './new-recept.component';

describe('NewReceptComponent', () => {
  let component: NewReceptComponent;
  let fixture: ComponentFixture<NewReceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewReceptComponent]
    });
    fixture = TestBed.createComponent(NewReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
