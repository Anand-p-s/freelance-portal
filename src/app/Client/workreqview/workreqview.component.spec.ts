import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkreqviewComponent } from './workreqview.component';

describe('WorkreqviewComponent', () => {
  let component: WorkreqviewComponent;
  let fixture: ComponentFixture<WorkreqviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkreqviewComponent]
    });
    fixture = TestBed.createComponent(WorkreqviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
