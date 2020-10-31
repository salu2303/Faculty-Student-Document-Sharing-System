import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetComponent } from './viewdet.component';

describe('ViewdetComponent', () => {
  let component: ViewdetComponent;
  let fixture: ComponentFixture<ViewdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
