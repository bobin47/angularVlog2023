import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyVcComponent } from './apply-vc.component';

describe('ApplyVcComponent', () => {
  let component: ApplyVcComponent;
  let fixture: ComponentFixture<ApplyVcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyVcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyVcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
