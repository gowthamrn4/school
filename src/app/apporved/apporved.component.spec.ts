import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApporvedComponent } from './apporved.component';

describe('ApporvedComponent', () => {
  let component: ApporvedComponent;
  let fixture: ComponentFixture<ApporvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApporvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApporvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
