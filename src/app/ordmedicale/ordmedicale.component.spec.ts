import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdmedicaleComponent } from './ordmedicale.component';

describe('OrdmedicaleComponent', () => {
  let component: OrdmedicaleComponent;
  let fixture: ComponentFixture<OrdmedicaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdmedicaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdmedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
