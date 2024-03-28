import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerhomeComponent } from './freelancerhome.component';

describe('FreelancerhomeComponent', () => {
  let component: FreelancerhomeComponent;
  let fixture: ComponentFixture<FreelancerhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerhomeComponent]
    });
    fixture = TestBed.createComponent(FreelancerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
