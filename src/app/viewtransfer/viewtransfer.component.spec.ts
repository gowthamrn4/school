import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransferComponent } from './viewtransfer.component';

describe('ViewtransferComponent', () => {
  let component: ViewtransferComponent;
  let fixture: ComponentFixture<ViewtransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
