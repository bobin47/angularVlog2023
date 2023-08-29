import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeletepostPostComponent } from './dialog-deletepost-post.component';

describe('DialogDeletepostPostComponent', () => {
  let component: DialogDeletepostPostComponent;
  let fixture: ComponentFixture<DialogDeletepostPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeletepostPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeletepostPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
