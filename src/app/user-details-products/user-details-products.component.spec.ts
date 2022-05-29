import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsProductsComponent } from './user-details-products.component';

describe('UserDetailsProductsComponent', () => {
  let component: UserDetailsProductsComponent;
  let fixture: ComponentFixture<UserDetailsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
