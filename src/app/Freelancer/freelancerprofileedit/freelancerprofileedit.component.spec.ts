import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerprofileeditComponent } from './freelancerprofileedit.component';

describe('FreelancerprofileeditComponent', () => {
  let component: FreelancerprofileeditComponent;
  let fixture: ComponentFixture<FreelancerprofileeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerprofileeditComponent]
    });
    fixture = TestBed.createComponent(FreelancerprofileeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
