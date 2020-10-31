import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsemComponent } from './testsem.component';

describe('TestsemComponent', () => {
  let component: TestsemComponent;
  let fixture: ComponentFixture<TestsemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
