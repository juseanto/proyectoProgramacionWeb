import { Component, OnInit } from '@angular/core';
import { Comentario } from '../shared/comentario';
import { ComentarioService } from '../shared/comentario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TemaService } from '../../temas/shared/tema.service';
import { Tema } from '../../temas/shared/tema';
import { switchMap } from 'rxjs/operators';
import { RestClientService } from '../../services/rest-client.service';

@Component({
  selector: 'app-comentarios-view',
  templateUrl: './comentarios-view.component.html',
  styleUrls: ['./comentarios-view.component.css'],
})
export class ComentariosViewComponent implements OnInit {
  comentarios: Comentario[] = [];
  comentario: Comentario = new Comentario(
    undefined,
    undefined,
    undefined,
    undefined
  );
  tema: Tema = new Tema(undefined, undefined, undefined, undefined);
  mostrarFormulario = false;

  constructor(
    private temaService: TemaService,
    private comentarioService: ComentarioService,
    private route: ActivatedRoute,
    private restClient: RestClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((params) => this.temaService.findById(+params.get('id'))))
      .subscribe((result) => {
        console.log(result);
        this.tema = result;

        console.log('tema ' + this.tema);

        this.temaService.getComentarios(this.tema.id).subscribe(
          (results) => {
            console.log(results);
            this.comentarios = results;
          },
          (error) => console.error(error)
        );
      });
  }

  verFormulario() {
    this.mostrarFormulario = true;
  }

  agregarComentario(): void {
    this.comentario.tema = this.tema;
    this.comentario.creador = this.restClient.nombre;
    this.comentarioService.create(this.comentario).subscribe(
      (result) => {
        console.log(result);
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
    this.mostrarFormulario = false;
  }

  eliminarComentario(id: number): void {
    // https://netbasal.com/when-to-unsubscribe-in-angular-d61c6b21bad3
    this.comentarioService.deleteComentario(id).subscribe(
      (result) => {
        console.log(result);
        window.location.reload();
      },
      (error) => {
        console.log(error);
        //this.errorMessage = 'Connection error';
      }
    );
  }
}
