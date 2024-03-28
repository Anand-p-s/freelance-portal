import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyverificationComponent } from './companyverification.component';

describe('CompanyverificationComponent', () => {
  let component: CompanyverificationComponent;
  let fixture: ComponentFixture<CompanyverificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyverificationComponent]
    });
    fixture = TestBed.createComponent(CompanyverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
