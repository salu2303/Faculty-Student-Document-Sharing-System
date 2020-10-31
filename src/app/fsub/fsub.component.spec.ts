import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsubComponent } from './fsub.component';

describe('FsubComponent', () => {
  let component: FsubComponent;
  let fixture: ComponentFixture<FsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
