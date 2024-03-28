import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientprojectsComponent } from './clientprojects.component';

describe('ClientprojectsComponent', () => {
  let component: ClientprojectsComponent;
  let fixture: ComponentFixture<ClientprojectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientprojectsComponent]
    });
    fixture = TestBed.createComponent(ClientprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
