import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsubmitComponent } from './ssubmit.component';

describe('SsubmitComponent', () => {
  let component: SsubmitComponent;
  let fixture: ComponentFixture<SsubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
