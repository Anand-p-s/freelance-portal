import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkeditComponent } from './workedit.component';

describe('WorkeditComponent', () => {
  let component: WorkeditComponent;
  let fixture: ComponentFixture<WorkeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkeditComponent]
    });
    fixture = TestBed.createComponent(WorkeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
