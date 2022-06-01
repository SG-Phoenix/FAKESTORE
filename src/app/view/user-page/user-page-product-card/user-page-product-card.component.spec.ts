import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageProductCardComponent } from './user-page-product-card.component';

describe('UserPageProductCardComponent', () => {
  let component: UserPageProductCardComponent;
  let fixture: ComponentFixture<UserPageProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
