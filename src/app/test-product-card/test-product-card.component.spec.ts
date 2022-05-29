import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProductCardComponent } from './test-product-card.component';

describe('TestProductCardComponent', () => {
  let component: TestProductCardComponent;
  let fixture: ComponentFixture<TestProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
