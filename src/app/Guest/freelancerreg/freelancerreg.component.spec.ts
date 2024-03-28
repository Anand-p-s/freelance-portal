import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerregComponent } from './freelancerreg.component';

describe('FreelancerregComponent', () => {
  let component: FreelancerregComponent;
  let fixture: ComponentFixture<FreelancerregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerregComponent]
    });
    fixture = TestBed.createComponent(FreelancerregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
