import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilcertComponent } from './profilcert.component';

describe('ProfilcertComponent', () => {
  let component: ProfilcertComponent;
  let fixture: ComponentFixture<ProfilcertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilcertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
