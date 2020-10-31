import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnotComponent } from './viewnot.component';

describe('ViewnotComponent', () => {
  let component: ViewnotComponent;
  let fixture: ComponentFixture<ViewnotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewnotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
