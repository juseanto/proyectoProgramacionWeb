import { Foro } from '../../foros/shared/foro';
export class Tema {
  constructor(
    public id: number,
    public titulo: string,
    public contenido: string,
    //public fecha: string,
    public foro: Foro
  ) {}
}
