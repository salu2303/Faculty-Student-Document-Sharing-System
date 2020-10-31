import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassiComponent } from './sassi.component';

describe('SassiComponent', () => {
  let component: SassiComponent;
  let fixture: ComponentFixture<SassiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SassiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
