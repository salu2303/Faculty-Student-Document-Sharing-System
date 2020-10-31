import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnotsComponent } from './viewnots.component';

describe('ViewnotsComponent', () => {
  let component: ViewnotsComponent;
  let fixture: ComponentFixture<ViewnotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewnotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
