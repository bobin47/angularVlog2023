import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVcComponent } from './dialog-vc.component';

describe('DialogVcComponent', () => {
  let component: DialogVcComponent;
  let fixture: ComponentFixture<DialogVcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
