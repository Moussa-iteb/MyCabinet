import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrmcnamComponent } from './irmcnam.component';

describe('IrmcnamComponent', () => {
  let component: IrmcnamComponent;
  let fixture: ComponentFixture<IrmcnamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrmcnamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrmcnamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
