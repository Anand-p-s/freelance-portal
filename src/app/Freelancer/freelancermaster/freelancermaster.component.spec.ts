import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancermasterComponent } from './freelancermaster.component';

describe('FreelancermasterComponent', () => {
  let component: FreelancermasterComponent;
  let fixture: ComponentFixture<FreelancermasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancermasterComponent]
    });
    fixture = TestBed.createComponent(FreelancermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
