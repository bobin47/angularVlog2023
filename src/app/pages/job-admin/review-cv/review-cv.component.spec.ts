import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCvComponent } from './review-cv.component';

describe('ReviewCvComponent', () => {
  let component: ReviewCvComponent;
  let fixture: ComponentFixture<ReviewCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
