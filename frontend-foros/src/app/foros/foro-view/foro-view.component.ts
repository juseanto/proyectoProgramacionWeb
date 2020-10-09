import { Component, OnInit } from '@angular/core';
import { ForoService } from '../shared/foro.service';
import { Foro } from '../shared/foro';
import { ActivatedRoute, Router } from '@angular/router';
import { RestClientService } from '../../services/rest-client.service';

@Component({
  selector: 'app-foro-view',
  templateUrl: './foro-view.component.html',
  styleUrls: ['./foro-view.component.css'],
})
export class ForoViewComponent implements OnInit {
  foros: Foro[] = [];
  mostrarFormulario = false;
  searchId: number = null;
  mostrarBotonCrearForo = true;

  user = '';
  password = '';

  nombre = '';
  tipo = '';

  message: any;

  foro: Foro = new Foro(undefined, undefined, undefined, false);

  mostrarEliminar = false;
  mostrarModificar = false;
  constructor(
    private foroService: ForoService,
    private route: ActivatedRoute,
    private router: Router,
    private restClient: RestClientService
  ) {}

  ngOnInit(): void {
    this.findForos();
    this.nombre = this.restClient.nombre;
    this.tipo = this.restClient.nombre;
    this.soyAdmin();
    this.soyUser();
  }

  findForos(): void {
    this.foroService.findAll().subscribe(
      (results) => {
        console.log(results);
        this.foros = results;
      },
      (error) => console.error(error)
    );
  }

  agregarForo(): void {
    this.foroService.create(this.foro).subscribe(
      (result) => {
        console.log(result);
        //window.location.reload();
        //this.router.navigate([`/public/foro`]);
        this.ngOnInit();
      },
      (error) => {
        console.error(error);
      }
    );
    this.mostrarFormulario = false;
  }

  verFormulario(): void {
    this.mostrarFormulario = true;
  }

  eliminarPost(id: number): void {
    //window.location.reload(); kk feo
    this.foroService.deletePost(id).subscribe(
      (result) => {
        console.log(result);
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  doLogin() {
    console.log(this.user + ' - ' + this.password);
    this.restClient.login(this.user, this.password).subscribe(
      (data) => {
        this.message = 'Login Ok';
        this.nombre = this.user;
        this.restClient.nombre = this.user;
        /*if (this.soyUser()) {
          console.log('usuario');
          this.mostrarBotonCrearForo = false;
        }
        if (this.soyAdmin()) {
          console.log('admin');
          this.mostrarBotonCrearForo = true;
        }*/
      },
      (error) => {
        console.error(error);
        this.message = 'Login fallido';
        this.restClient.nombre = '';
        this.restClient.tipo = '';
        this.nombre = '';
        this.tipo = '';
      }
    );
  }

  logout() {
    this.restClient.logout().subscribe(
      (data) => {
        this.message = 'Logout Ok';
        this.tipo = '';
        this.restClient.tipo = '';
      },
      (error) => {
        this.message = 'Logout Fallido';
      }
    );
  }

  soyAdmin(): boolean {
    this.restClient.soyAdmin().subscribe(
      (data) => {
        this.tipo = 'Eres admin';
        this.restClient.tipo = 'Eres admin';
        this.mostrarBotonCrearForo = true;
      },
      (error) => {}
    );
    return false;
  }

  soyUser(): boolean {
    this.restClient.soyUser().subscribe(
      (data) => {
        this.tipo = 'Eres user';
        this.restClient.tipo = 'Eres user';
        /*quemado!!!!*/
        this.mostrarBotonCrearForo = true;
        this.mostrarEliminar = true;
        this.mostrarModificar = true;
      },
      (error) => {}
    );
    return false;
  }

  moderarForo()
  {
    this.foro.moderado = !this.foro.moderado;
  }
}
