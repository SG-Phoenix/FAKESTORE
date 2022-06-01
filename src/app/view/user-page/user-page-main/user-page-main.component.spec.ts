import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageMainComponent } from './user-page-main.component';

describe('UserPageMainComponent', () => {
  let component: UserPageMainComponent;
  let fixture: ComponentFixture<UserPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
