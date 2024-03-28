import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerchangepwdComponent } from './freelancerchangepwd.component';

describe('FreelancerchangepwdComponent', () => {
  let component: FreelancerchangepwdComponent;
  let fixture: ComponentFixture<FreelancerchangepwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerchangepwdComponent]
    });
    fixture = TestBed.createComponent(FreelancerchangepwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
