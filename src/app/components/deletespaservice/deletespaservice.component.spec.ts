import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletespaserviceComponent } from './deletespaservice.component';

describe('DeletespaserviceComponent', () => {
  let component: DeletespaserviceComponent;
  let fixture: ComponentFixture<DeletespaserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletespaserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletespaserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
