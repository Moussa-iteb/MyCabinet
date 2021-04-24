import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagerieAPCIComponent } from './imagerie-apci.component';

describe('ImagerieAPCIComponent', () => {
  let component: ImagerieAPCIComponent;
  let fixture: ComponentFixture<ImagerieAPCIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagerieAPCIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagerieAPCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
