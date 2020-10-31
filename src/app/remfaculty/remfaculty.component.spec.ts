import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemfacultyComponent } from './remfaculty.component';

describe('RemfacultyComponent', () => {
  let component: RemfacultyComponent;
  let fixture: ComponentFixture<RemfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemfacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
