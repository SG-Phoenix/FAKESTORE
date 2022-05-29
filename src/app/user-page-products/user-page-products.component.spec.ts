import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageProductsComponent } from './user-page-products.component';

describe('UserPageProductsComponent', () => {
  let component: UserPageProductsComponent;
  let fixture: ComponentFixture<UserPageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
