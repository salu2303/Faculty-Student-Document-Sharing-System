import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemstudentComponent } from './remstudent.component';

describe('RemstudentComponent', () => {
  let component: RemstudentComponent;
  let fixture: ComponentFixture<RemstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
