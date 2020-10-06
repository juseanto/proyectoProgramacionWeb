import { Component, OnInit } from '@angular/core';
import { TemaService } from '../shared/tema.service';
import { Tema } from '../shared/tema';
import { ActivatedRoute, Router } from '@angular/router';
import { Foro } from '../../foros/shared/foro';
import { ForoService } from '../../foros/shared/foro.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-temas-view',
  templateUrl: './temas-view.component.html',
  styleUrls: ['./temas-view.component.css'],
})
export class TemasViewComponent implements OnInit {
  temas: Tema[] = [];
  foro: Foro = new Foro(undefined, undefined, undefined);
  tema: Tema = new Tema(undefined, undefined, undefined, undefined);
  mostrarFormulario = false;
  constructor(
    private temaService: TemaService,
    private foroService: ForoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((params) => this.foroService.findById(+params.get('id'))))
      .subscribe((result) => {
        console.log(result);
        this.foro = result;

        this.foroService.getTemas(this.foro.id).subscribe(
          (results) => {
            console.log(results);
            this.temas = results;
          },
          (error) => console.error(error)
        );
      });
  }

  verFormulario() {
    this.mostrarFormulario = true;
  }

  agregarTema(): void {
    this.tema.foro = this.foro;
    //window.location.reload();
    this.temaService.create(this.tema).subscribe(
      (result) => {
        console.log(result);
        window.location.reload();
      },
      (error) => {
        console.error(error);
        //this.errorMessage = error.toString();
        //this.submitted = false;
      }
    );
    this.mostrarFormulario = false;
  }

  eliminarTema(id: number): void {
    // https://netbasal.com/when-to-unsubscribe-in-angular-d61c6b21bad3
    this.temaService.deleteTema(id).subscribe(
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
  /*agregarTema(): void {
    this.mostrarFormulario = true;
  }

  crearTema(): void {
    this.temaService.crearTema(this.titulo, this.contenido, this.idForo);
    let idF = parseInt(this.idForo);
    this.temas = this.temaService.buscarTemas(idF);
  }*/
}
