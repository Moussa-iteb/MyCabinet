import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrmComponent } from './irm.component';

describe('IrmComponent', () => {
  let component: IrmComponent;
  let fixture: ComponentFixture<IrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
