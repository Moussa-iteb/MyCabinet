import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerapciComponent } from './scannerapci.component';

describe('ScannerapciComponent', () => {
  let component: ScannerapciComponent;
  let fixture: ComponentFixture<ScannerapciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannerapciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannerapciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
