import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryeditComponent } from './subcategoryedit.component';

describe('SubcategoryeditComponent', () => {
  let component: SubcategoryeditComponent;
  let fixture: ComponentFixture<SubcategoryeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcategoryeditComponent]
    });
    fixture = TestBed.createComponent(SubcategoryeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
