import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoEditComponent } from './foro-edit.component';

describe('ForoEditComponent', () => {
  let component: ForoEditComponent;
  let fixture: ComponentFixture<ForoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
