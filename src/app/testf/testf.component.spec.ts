import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfComponent } from './testf.component';

describe('TestfComponent', () => {
  let component: TestfComponent;
  let fixture: ComponentFixture<TestfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
