import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsubComponent } from './ssub.component';

describe('SsubComponent', () => {
  let component: SsubComponent;
  let fixture: ComponentFixture<SsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
