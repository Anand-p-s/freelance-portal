import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingprojectviewComponent } from './ongoingprojectview.component';

describe('OngoingprojectviewComponent', () => {
  let component: OngoingprojectviewComponent;
  let fixture: ComponentFixture<OngoingprojectviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OngoingprojectviewComponent]
    });
    fixture = TestBed.createComponent(OngoingprojectviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
