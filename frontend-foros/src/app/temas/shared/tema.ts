import { Foro } from '../../foros/shared/foro';
import { ViewportScroller } from '@angular/common';
export class Tema {
  constructor(
    public id: number,
    public titulo: string,
    public contenido: string,
    public fecha: string,
    public aprobado: boolean,
    public votos: number,
    public foro: Foro
  ) {}
}
