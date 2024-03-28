import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryregComponent } from './subcategoryreg.component';

describe('SubcategoryregComponent', () => {
  let component: SubcategoryregComponent;
  let fixture: ComponentFixture<SubcategoryregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcategoryregComponent]
    });
    fixture = TestBed.createComponent(SubcategoryregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
