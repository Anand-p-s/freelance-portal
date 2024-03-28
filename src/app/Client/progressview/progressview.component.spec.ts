import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressviewComponent } from './progressview.component';

describe('ProgressviewComponent', () => {
  let component: ProgressviewComponent;
  let fixture: ComponentFixture<ProgressviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressviewComponent]
    });
    fixture = TestBed.createComponent(ProgressviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
