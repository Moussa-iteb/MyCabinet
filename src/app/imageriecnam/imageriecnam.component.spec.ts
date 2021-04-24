import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageriecnamComponent } from './imageriecnam.component';

describe('ImageriecnamComponent', () => {
  let component: ImageriecnamComponent;
  let fixture: ComponentFixture<ImageriecnamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageriecnamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageriecnamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
