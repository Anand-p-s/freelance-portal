import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientprofileeditComponent } from './clientprofileedit.component';

describe('ClientprofileeditComponent', () => {
  let component: ClientprofileeditComponent;
  let fixture: ComponentFixture<ClientprofileeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientprofileeditComponent]
    });
    fixture = TestBed.createComponent(ClientprofileeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
