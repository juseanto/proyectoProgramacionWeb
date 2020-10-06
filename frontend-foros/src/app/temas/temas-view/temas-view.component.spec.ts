import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasViewComponent } from './temas-view.component';

describe('TemasViewComponent', () => {
  let component: TemasViewComponent;
  let fixture: ComponentFixture<TemasViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
