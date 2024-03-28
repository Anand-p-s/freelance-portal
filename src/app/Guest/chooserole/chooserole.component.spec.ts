import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseroleComponent } from './chooserole.component';

describe('ChooseroleComponent', () => {
  let component: ChooseroleComponent;
  let fixture: ComponentFixture<ChooseroleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseroleComponent]
    });
    fixture = TestBed.createComponent(ChooseroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
