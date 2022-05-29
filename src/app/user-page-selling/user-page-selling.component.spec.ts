import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageSellingComponent } from './user-page-selling.component';

describe('UserPageSellingComponent', () => {
  let component: UserPageSellingComponent;
  let fixture: ComponentFixture<UserPageSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageSellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
