import { Injectable } from '@angular/core';
import { Comentario } from './comentario';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
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
    const url = `${environment.BlogServiceBaseUrl}public/comentario`;
    return this.get<Comentario[]>(url);
  }

  deleteComentario(id: number) {
    const url = `${environment.BlogServiceBaseUrl}public/comentario/${id}`;
    return this.http.delete<Comentario>(url).pipe(
      retry(5), // Retries 5 times until successful
      catchError(this.handleError) // Uses this.handleError() to process any error in the request
    );
  }
  findById(
    id: number // : Observable<Employee>
  ) {
    const url = `${environment.BlogServiceBaseUrl}public/comentario/${id}`;
    return this.get<Comentario>(url);
  }

  create(comentario: Comentario) {
    const url = `${environment.BlogServiceBaseUrl}public/comentario`;
    return this.post(url, {
      contenido: comentario.contenido,
      tema: comentario.tema,
      creador: comentario.creador,
    });
  }

  update(comentario: Comentario) {
    const url = `${environment.BlogServiceBaseUrl}public/comentario/${comentario.id}`;
    return this.put(url, {
      contenido: comentario.contenido,
    });
  }
}
