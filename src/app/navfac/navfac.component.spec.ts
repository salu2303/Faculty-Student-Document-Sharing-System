import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavfacComponent } from './navfac.component';

describe('NavfacComponent', () => {
  let component: NavfacComponent;
  let fixture: ComponentFixture<NavfacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavfacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavfacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
