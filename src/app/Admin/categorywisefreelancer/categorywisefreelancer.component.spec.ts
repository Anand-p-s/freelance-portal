import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorywisefreelancerComponent } from './categorywisefreelancer.component';

describe('CategorywisefreelancerComponent', () => {
  let component: CategorywisefreelancerComponent;
  let fixture: ComponentFixture<CategorywisefreelancerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorywisefreelancerComponent]
    });
    fixture = TestBed.createComponent(CategorywisefreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
