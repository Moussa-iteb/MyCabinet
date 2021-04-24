import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannercnamComponent } from './scannercnam.component';

describe('ScannercnamComponent', () => {
  let component: ScannercnamComponent;
  let fixture: ComponentFixture<ScannercnamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannercnamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannercnamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
