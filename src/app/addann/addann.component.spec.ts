import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddannComponent } from './addann.component';

describe('AddannComponent', () => {
  let component: AddannComponent;
  let fixture: ComponentFixture<AddannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddannComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
