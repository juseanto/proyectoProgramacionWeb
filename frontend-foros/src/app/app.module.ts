import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComentariosViewComponent } from './comentarios/comentarios-view/comentarios-view.component';
import { TemasViewComponent } from './temas/temas-view/temas-view.component';
import { FormsModule } from '@angular/forms';
import { ForoViewComponent } from './foros/foro-view/foro-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ForoEditComponent } from './foros/foro-edit/foro-edit.component';
import { TemaEditComponent } from './temas/tema-edit/tema-edit.component';
import { ComentariosEditComponent } from './comentarios/comentarios-edit/comentarios-edit.component';
import { RestClientService } from './services/rest-client.service';
import { ForoModerarComponent } from './foros/foro-moderar/foro-moderar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComentariosViewComponent,
    TemasViewComponent,
    ForoViewComponent,
    ForoEditComponent,
    TemaEditComponent,
    ComentariosEditComponent,
    ForoModerarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [RestClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
