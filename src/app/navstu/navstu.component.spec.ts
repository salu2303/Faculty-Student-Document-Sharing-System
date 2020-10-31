import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavstuComponent } from './navstu.component';

describe('NavstuComponent', () => {
  let component: NavstuComponent;
  let fixture: ComponentFixture<NavstuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavstuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
