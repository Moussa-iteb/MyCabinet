import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilconsComponent } from './profilcons.component';

describe('ProfilconsComponent', () => {
  let component: ProfilconsComponent;
  let fixture: ComponentFixture<ProfilconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
