import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaserviceComponent } from './spaservice.component';

describe('SpaserviceComponent', () => {
  let component: SpaserviceComponent;
  let fixture: ComponentFixture<SpaserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
