import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceaniaDetailComponent } from './oceania-detail.component';

describe('OceaniaDetailComponent', () => {
  let component: OceaniaDetailComponent;
  let fixture: ComponentFixture<OceaniaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceaniaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceaniaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
