import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRecordListComponent } from './active-record-list.component';

describe('ActiveRecordListComponent', () => {
  let component: ActiveRecordListComponent;
  let fixture: ComponentFixture<ActiveRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
