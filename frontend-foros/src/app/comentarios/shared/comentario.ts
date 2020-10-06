import { Tema } from '../../temas/shared/tema';
export class Comentario {
  constructor(
    public id: number,
    public contenido: string,
    public tema: Tema,
    public creador: string
  ) {}
}
