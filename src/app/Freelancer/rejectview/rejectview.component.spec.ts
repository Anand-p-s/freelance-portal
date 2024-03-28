import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectviewComponent } from './rejectview.component';

describe('RejectviewComponent', () => {
  let component: RejectviewComponent;
  let fixture: ComponentFixture<RejectviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectviewComponent]
    });
    fixture = TestBed.createComponent(RejectviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
