import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientchangepwdComponent } from './clientchangepwd.component';

describe('ClientchangepwdComponent', () => {
  let component: ClientchangepwdComponent;
  let fixture: ComponentFixture<ClientchangepwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientchangepwdComponent]
    });
    fixture = TestBed.createComponent(ClientchangepwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
