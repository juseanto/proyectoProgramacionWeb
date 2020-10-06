import { Component, OnInit } from '@angular/core';
import { Foro } from '../shared/foro';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ForoService } from '../shared/foro.service';

@Component({
  selector: 'app-foro-edit',
  templateUrl: './foro-edit.component.html',
  styleUrls: ['./foro-edit.component.css'],
})
export class ForoEditComponent implements OnInit {
  foro: Foro = undefined;
  errorMessage = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foroService: ForoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((params) => this.foroService.findById(+params.get('id'))))
      .subscribe((result) => {
        console.log(result);
        this.foro = result;
      });
  }

  update() {
    console.log(this.foro);
    this.foroService.update(this.foro).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate([`foro/view`]);
      },
      (error) => {
        console.error(error);
        this.errorMessage = error.toString();
      }
    );
  }
}
