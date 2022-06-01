import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentProductCardComponent } from './main-content-product-card.component';

describe('MainContentProductCardComponent', () => {
  let component: MainContentProductCardComponent;
  let fixture: ComponentFixture<MainContentProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
