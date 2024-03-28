import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryviewComponent } from './subcategoryview.component';

describe('SubcategoryviewComponent', () => {
  let component: SubcategoryviewComponent;
  let fixture: ComponentFixture<SubcategoryviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcategoryviewComponent]
    });
    fixture = TestBed.createComponent(SubcategoryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
