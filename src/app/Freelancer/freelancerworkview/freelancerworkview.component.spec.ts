import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerworkviewComponent } from './freelancerworkview.component';

describe('FreelancerworkviewComponent', () => {
  let component: FreelancerworkviewComponent;
  let fixture: ComponentFixture<FreelancerworkviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerworkviewComponent]
    });
    fixture = TestBed.createComponent(FreelancerworkviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
