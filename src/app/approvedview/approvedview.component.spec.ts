import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedviewComponent } from './approvedview.component';

describe('ApprovedviewComponent', () => {
  let component: ApprovedviewComponent;
  let fixture: ComponentFixture<ApprovedviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
