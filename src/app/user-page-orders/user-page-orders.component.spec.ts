import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageOrdersComponent } from './user-page-orders.component';

describe('UserPageOrdersComponent', () => {
  let component: UserPageOrdersComponent;
  let fixture: ComponentFixture<UserPageOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
