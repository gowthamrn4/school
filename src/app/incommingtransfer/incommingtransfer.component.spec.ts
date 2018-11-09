import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncommingtransferComponent } from './incommingtransfer.component';

describe('IncommingtransferComponent', () => {
  let component: IncommingtransferComponent;
  let fixture: ComponentFixture<IncommingtransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncommingtransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncommingtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
