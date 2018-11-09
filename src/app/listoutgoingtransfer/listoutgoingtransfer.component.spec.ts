import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoutgoingtransferComponent } from './listoutgoingtransfer.component';

describe('ListoutgoingtransferComponent', () => {
  let component: ListoutgoingtransferComponent;
  let fixture: ComponentFixture<ListoutgoingtransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoutgoingtransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoutgoingtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
