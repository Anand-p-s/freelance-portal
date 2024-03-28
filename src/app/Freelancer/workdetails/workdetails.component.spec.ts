import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdetailsComponent } from './workdetails.component';

describe('WorkdetailsComponent', () => {
  let component: WorkdetailsComponent;
  let fixture: ComponentFixture<WorkdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkdetailsComponent]
    });
    fixture = TestBed.createComponent(WorkdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
