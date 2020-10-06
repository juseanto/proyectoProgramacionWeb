import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosViewComponent } from './comentarios-view.component';

describe('ComentariosViewComponent', () => {
  let component: ComentariosViewComponent;
  let fixture: ComponentFixture<ComentariosViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariosViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
