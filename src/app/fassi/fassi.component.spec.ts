import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FassiComponent } from './fassi.component';

describe('FassiComponent', () => {
  let component: FassiComponent;
  let fixture: ComponentFixture<FassiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FassiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
