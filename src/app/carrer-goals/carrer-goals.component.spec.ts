import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerGoalsComponent } from './carrer-goals.component';

describe('CarrerGoalsComponent', () => {
  let component: CarrerGoalsComponent;
  let fixture: ComponentFixture<CarrerGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrerGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
