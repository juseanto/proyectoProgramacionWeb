import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/temas/shared/tema';
import { Comentario } from 'src/app/comentarios/shared/comentario';
import { ForoService } from '../shared/foro.service';
import { TemaService } from '../../temas/shared/tema.service';
import { ComentarioService } from '../../comentarios/shared/comentario.service';

@Component({
  selector: 'app-foro-moderar',
  templateUrl: './foro-moderar.component.html',
  styleUrls: ['./foro-moderar.component.css']
})
export class ForoModerarComponent implements OnInit {
  temas: Tema[];
  comentarios: Comentario[];
  constructor(
    private foroService: ForoService,
    private temaService: TemaService,
    private comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.cargarComentario();
    this.cargarTemas();
  }

  cargarTemas()
  {
    this.temaService.findAll().subscribe(
      (results) => {
        console.log(results);
        this.temas = results;
      },
      (error) => console.error(error)
    );
  }

  cargarComentario()
  {
    this.comentarioService.findAll().subscribe(
      (results) => {
        console.log(results);
        this.comentarios = results;
      },
      (error) => console.error(error)
    );
  }

  aprobarTema(temaSeleccionado: Tema)
  {
    console.log('Realmente quiere aprobar el tema: ' + temaSeleccionado.titulo);
    temaSeleccionado.aprobado = true;
    this.temaService.update(temaSeleccionado).subscribe(
      (results) => {
        console.log(results);
      },
      (error) => console.error(error)
    );
  }

  rechazarTema(temaSeleccionado: Tema)
  {
    console.log('Realmente quiere eliminar el tema: ' + temaSeleccionado.titulo);
    this.temaService.deleteTema(temaSeleccionado.id).subscribe(
      (results) => {
        this.cargarTemas();
        console.log(results);
      },
      (error) => console.error(error)
    );
  }

  aprobarComentario(comentarioSeleccionado: Comentario){
    console.log('Realmente quiere aprobar el comentario: ' + comentarioSeleccionado.contenido);
    comentarioSeleccionado.aprobado = true;
    this.comentarioService.update(comentarioSeleccionado).subscribe(
      (results) => {
        console.log(results);
      },
      (error) => console.error(error)
    );
  }

  rechazarComentario(comentarioSeleccionado: Comentario){
    console.log('Realmente quiere aprobar el comentario: ' + comentarioSeleccionado.contenido);
    this.comentarioService.deleteComentario(comentarioSeleccionado.id).subscribe(
      (results) => {
        console.log(results);
        this.cargarComentario();
      },
      (error) => console.error(error)
    );
  }


}
