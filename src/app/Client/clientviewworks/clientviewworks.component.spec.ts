import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientviewworksComponent } from './clientviewworks.component';

describe('ClientviewworksComponent', () => {
  let component: ClientviewworksComponent;
  let fixture: ComponentFixture<ClientviewworksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientviewworksComponent]
    });
    fixture = TestBed.createComponent(ClientviewworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
