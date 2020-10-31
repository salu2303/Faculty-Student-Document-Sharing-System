import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsemfComponent } from './testsemf.component';

describe('TestsemfComponent', () => {
  let component: TestsemfComponent;
  let fixture: ComponentFixture<TestsemfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsemfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsemfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
