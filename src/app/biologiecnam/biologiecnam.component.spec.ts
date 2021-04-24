import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologiecnamComponent } from './biologiecnam.component';

describe('BiologiecnamComponent', () => {
  let component: BiologiecnamComponent;
  let fixture: ComponentFixture<BiologiecnamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiologiecnamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiologiecnamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
