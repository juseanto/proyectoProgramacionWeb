import { Component } from '@angular/core';
import { ForoService } from './foros/shared/foro.service';
import { Foro } from './foros/shared/foro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ANGA BLOG';
}
