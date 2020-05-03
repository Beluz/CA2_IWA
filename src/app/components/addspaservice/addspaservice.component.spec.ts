import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspaserviceComponent } from './addspaservice.component';

describe('AddspaserviceComponent', () => {
  let component: AddspaserviceComponent;
  let fixture: ComponentFixture<AddspaserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspaserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspaserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
