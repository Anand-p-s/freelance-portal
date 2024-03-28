import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatewisefreelancerComponent } from './datewisefreelancer.component';

describe('DatewisefreelancerComponent', () => {
  let component: DatewisefreelancerComponent;
  let fixture: ComponentFixture<DatewisefreelancerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatewisefreelancerComponent]
    });
    fixture = TestBed.createComponent(DatewisefreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
