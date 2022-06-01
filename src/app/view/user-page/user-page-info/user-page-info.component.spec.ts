import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageInfoComponent } from './user-page-info.component';

describe('UserPageInfoComponent', () => {
  let component: UserPageInfoComponent;
  let fixture: ComponentFixture<UserPageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
