import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartcategoryComponent } from './piechartcategory.component';

describe('PiechartcategoryComponent', () => {
  let component: PiechartcategoryComponent;
  let fixture: ComponentFixture<PiechartcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiechartcategoryComponent]
    });
    fixture = TestBed.createComponent(PiechartcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
