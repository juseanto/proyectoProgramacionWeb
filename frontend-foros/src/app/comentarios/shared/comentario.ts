import { Tema } from '../../temas/shared/tema';
export class Comentario {
  constructor(
    public id: number,
    public contenido: string,
    public tema: Tema,
    public creador: string,
    public respuesta: string,
    public fecha: string ,
    public aprobado: boolean,
    public votos: number
  ) {}
}
