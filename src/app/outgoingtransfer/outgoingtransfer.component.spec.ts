import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingtransferComponent } from './outgoingtransfer.component';

describe('OutgoingtransferComponent', () => {
  let component: OutgoingtransferComponent;
  let fixture: ComponentFixture<OutgoingtransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutgoingtransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
