import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UldfComponent } from './uldf.component';

describe('UldfComponent', () => {
  let component: UldfComponent;
  let fixture: ComponentFixture<UldfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UldfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UldfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
