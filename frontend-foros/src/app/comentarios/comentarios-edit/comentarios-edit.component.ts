import { Component, OnInit } from '@angular/core';
import { Comentario } from '../shared/comentario';
import { ComentarioService } from '../shared/comentario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-comentarios-edit',
  templateUrl: './comentarios-edit.component.html',
  styleUrls: ['./comentarios-edit.component.css'],
})
export class ComentariosEditComponent implements OnInit {
  comentario: Comentario = undefined;
  errorMessage = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private comentarioService: ComentarioService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) =>
          this.comentarioService.findById(+params.get('id'))
        )
      )
      .subscribe((result) => {
        console.log(result);
        this.comentario = result;
      });
  }

  update() {
    console.log(this.comentario);
    this.comentarioService.update(this.comentario).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate([`/foro/view`]);
      },
      (error) => {
        console.error(error);
        this.errorMessage = error.toString();
      }
    );
  }
}
