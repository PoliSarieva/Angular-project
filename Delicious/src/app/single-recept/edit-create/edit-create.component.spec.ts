import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreateReceptComponent } from './edit-create.component';

describe('EditCreateReceptComponent', () => {
  let component: EditCreateReceptComponent;
  let fixture: ComponentFixture<EditCreateReceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCreateReceptComponent]
    });
    fixture = TestBed.createComponent(EditCreateReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
