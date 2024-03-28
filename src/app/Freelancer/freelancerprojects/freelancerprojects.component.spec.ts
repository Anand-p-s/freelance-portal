import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerprojectsComponent } from './freelancerprojects.component';

describe('FreelancerprojectsComponent', () => {
  let component: FreelancerprojectsComponent;
  let fixture: ComponentFixture<FreelancerprojectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerprojectsComponent]
    });
    fixture = TestBed.createComponent(FreelancerprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
