import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatatableDtmComponent } from './ng-datatable-dtm.component';

describe('NgDatatableDtmComponent', () => {
  let component: NgDatatableDtmComponent;
  let fixture: ComponentFixture<NgDatatableDtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDatatableDtmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatatableDtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
