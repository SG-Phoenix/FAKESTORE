import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageAddressesComponent } from './user-page-addresses.component';

describe('UserPageAddressesComponent', () => {
  let component: UserPageAddressesComponent;
  let fixture: ComponentFixture<UserPageAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
