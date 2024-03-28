import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkreqComponent } from './workreq.component';

describe('WorkreqComponent', () => {
  let component: WorkreqComponent;
  let fixture: ComponentFixture<WorkreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkreqComponent]
    });
    fixture = TestBed.createComponent(WorkreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
