import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrmapciComponent } from './irmapci.component';

describe('IrmapciComponent', () => {
  let component: IrmapciComponent;
  let fixture: ComponentFixture<IrmapciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrmapciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrmapciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
