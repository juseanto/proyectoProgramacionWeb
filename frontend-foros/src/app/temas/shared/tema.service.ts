import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from './tema';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Comentario } from '../../comentarios/shared/comentario';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError('An error has occurred');
  }

  private get<T>(url): Observable<T> {
    console.log('get:', url);
    return this.http
      .get<T>(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      })
      .pipe(retry(5), catchError(this.handleError));
  }

  private post<T>(url, data: T): Observable<T> {
    console.log('post:', url);
    return this.http
      .post<T>(url, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }
  private put<T>(url, data: T): Observable<T> {
    console.log('put:', url);
    return this.http.put<T>(url, data).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }

  findAll() {
    const url = `${environment.BlogServiceBaseUrl}public/tema`;
    return this.get<Tema[]>(url);
  }

  findById(
    id: number // : Observable<Employee>
  ) {
    const url = `${environment.BlogServiceBaseUrl}public/tema/${id}`;
    return this.get<Tema>(url);
  }

  create(tema: Tema) {
    const url = `${environment.BlogServiceBaseUrl}public/tema`;
    return this.post(url, {
      titulo: tema.titulo,
      contenido: tema.contenido,
      foro: tema.foro,
    });
  }

  deleteTema(id: number) {
    const url = `${environment.BlogServiceBaseUrl}user/tema/${id}`;
    return this.http.delete<Tema>(url).pipe(
      retry(5), // Retries 5 times until successful
      catchError(this.handleError) // Uses this.handleError() to process any error in the request
    );
  }

  update(tema: Tema) {
    const url = `${environment.BlogServiceBaseUrl}user/tema/${tema.id}`;
    return this.put(url, {
      titulo: tema.titulo,
      contenido: tema.contenido,
    });
  }

  getComentarios(id: number) {
    const url = `${environment.BlogServiceBaseUrl}public/tema/${id}/comentarios`;
    return this.get<Comentario[]>(url);
  }
}
