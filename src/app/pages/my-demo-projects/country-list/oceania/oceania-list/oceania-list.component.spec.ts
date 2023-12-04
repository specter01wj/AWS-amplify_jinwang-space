import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceaniaListComponent } from './oceania-list.component';

describe('OceaniaListComponent', () => {
  let component: OceaniaListComponent;
  let fixture: ComponentFixture<OceaniaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceaniaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceaniaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
