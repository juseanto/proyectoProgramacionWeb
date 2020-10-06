import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosEditComponent } from './comentarios-edit.component';

describe('ComentariosEditComponent', () => {
  let component: ComentariosEditComponent;
  let fixture: ComponentFixture<ComentariosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
