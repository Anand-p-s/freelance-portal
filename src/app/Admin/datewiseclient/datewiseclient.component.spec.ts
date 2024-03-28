import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatewiseclientComponent } from './datewiseclient.component';

describe('DatewiseclientComponent', () => {
  let component: DatewiseclientComponent;
  let fixture: ComponentFixture<DatewiseclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatewiseclientComponent]
    });
    fixture = TestBed.createComponent(DatewiseclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
