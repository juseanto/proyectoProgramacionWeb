import { Component, OnInit } from '@angular/core';
import { TemaService } from '../shared/tema.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Tema } from '../shared/tema';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css'],
})
export class TemaEditComponent implements OnInit {
  tema: Tema = undefined;
  errorMessage = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private temaService: TemaService
  ) {}

  id: number;

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.route.paramMap
      .pipe(switchMap((params) => this.temaService.findById(+params.get('id'))))
      .subscribe((result) => {
        console.log(result);
        this.tema = result;
      });
  }

  update() {
    console.log(this.tema);
    this.temaService.update(this.tema).subscribe(
      (result) => {
        console.log(result);
        console.log(this.id);
        this.router.navigate([`/foro/view`]);
      },
      (error) => {
        console.error(error);
        this.errorMessage = error.toString();
      }
    );
  }
}
