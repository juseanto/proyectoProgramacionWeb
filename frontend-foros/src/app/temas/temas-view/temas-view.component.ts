import { Component, OnInit } from '@angular/core';
import { TemaService } from '../shared/tema.service';
import { Tema } from '../shared/tema';
import { ActivatedRoute, Router } from '@angular/router';
import { Foro } from '../../foros/shared/foro';
import { ForoService } from '../../foros/shared/foro.service';
import { switchMap } from 'rxjs/operators';
import { RestClientService } from '../../services/rest-client.service';

@Component({
  selector: 'app-temas-view',
  templateUrl: './temas-view.component.html',
  styleUrls: ['./temas-view.component.css'],
})
export class TemasViewComponent implements OnInit {
  temas: Tema[] = [];
  foro: Foro = new Foro(undefined, undefined, undefined, undefined);
  tema: Tema = new Tema(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  mostrarFormulario = false;
  fechaActual: string;
  constructor(
    private temaService: TemaService,
    private foroService: ForoService,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: RestClientService
  ) {}

  ngOnInit(): void {
    this.fechaActual = new Date().toLocaleDateString();

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
    /**Si el foro tiene que ser moderado, el tema aun no esta aprobado y no se mostrara */
    this.tema.aprobado = !this.foro.moderado;
    this.tema.fecha = this.fechaActual;
    this.temaService.create(this.tema).subscribe(
      (result) => {
        console.log(result);
        //window.location.reload();
        this.ngOnInit();
      },
      (error) => {
        console.error(error);
      }
    );
    this.mostrarFormulario = false;
  }

  eliminarTema(id: number): void {
    // https://netbasal.com/when-to-unsubscribe-in-angular-d61c6b21bad3
    this.temaService.deleteTema(id).subscribe(
      (result) => {
        console.log(result);
        //window.location.reload();
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
        //this.errorMessage = 'Connection error';
      }
    );
  }

  /**Votacion */
  votarArriba(temaSeleccionado: Tema){
    temaSeleccionado.votos = temaSeleccionado.votos + 1;
    this.temaService.update(temaSeleccionado).subscribe(
      (result) => {
        console.log(result);
        //window.location.reload();
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
        //this.errorMessage = 'Connection error';
      }
    );
  }

  votoAbajo(temaSeleccionado: Tema){
    temaSeleccionado.votos = temaSeleccionado.votos - 1;
    this.temaService.update(temaSeleccionado).subscribe(
      (result) => {
        console.log(result);
        //window.location.reload();
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
        //this.errorMessage = 'Connection error';
      }
    );
  }
}
