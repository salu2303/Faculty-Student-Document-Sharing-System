import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UldComponent } from './uld.component';

describe('UldComponent', () => {
  let component: UldComponent;
  let fixture: ComponentFixture<UldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
