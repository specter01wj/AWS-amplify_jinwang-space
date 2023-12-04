import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaListComponent } from './africa-list.component';

describe('AfricaListComponent', () => {
  let component: AfricaListComponent;
  let fixture: ComponentFixture<AfricaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfricaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
