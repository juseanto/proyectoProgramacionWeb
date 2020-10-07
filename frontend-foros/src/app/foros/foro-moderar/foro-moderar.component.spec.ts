import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoModerarComponent } from './foro-moderar.component';

describe('ForoModerarComponent', () => {
  let component: ForoModerarComponent;
  let fixture: ComponentFixture<ForoModerarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForoModerarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoModerarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
