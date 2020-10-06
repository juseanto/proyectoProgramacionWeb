import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemasViewComponent } from './temas/temas-view/temas-view.component';
import { ComentariosViewComponent } from './comentarios/comentarios-view/comentarios-view.component';
import { ForoViewComponent } from './foros/foro-view/foro-view.component';
import { ForoEditComponent } from './foros/foro-edit/foro-edit.component';
import { TemaEditComponent } from './temas/tema-edit/tema-edit.component';
import { ComentariosEditComponent } from './comentarios/comentarios-edit/comentarios-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/foro/view' },
  { path: 'foro/view', component: ForoViewComponent },
  { path: 'tema/view/:id', component: TemasViewComponent },
  { path: 'comentario/view/:id', component: ComentariosViewComponent },
  { path: 'comentario/edit/:id', component: ComentariosEditComponent },
  { path: 'foro/edit/:id', component: ForoEditComponent },
  { path: 'tema/edit/:id', component: TemaEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
