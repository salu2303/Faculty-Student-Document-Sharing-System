import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsubmitComponent } from './csubmit.component';

describe('CsubmitComponent', () => {
  let component: CsubmitComponent;
  let fixture: ComponentFixture<CsubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
