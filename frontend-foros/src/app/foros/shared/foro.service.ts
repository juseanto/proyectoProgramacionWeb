import { Injectable } from '@angular/core';
import { Foro } from './foro';
import { TemaService } from '../../temas/shared/tema.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tema } from '../../temas/shared/tema';

@Injectable({
  providedIn: 'root',
})
export class ForoService {
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
        withCredentials: true,
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
    const url = `${environment.BlogServiceBaseUrl}public/foro`;
    return this.get<Foro[]>(url);
  }

  getTemas(id: number) {
    const url = `${environment.BlogServiceBaseUrl}public/foro/${id}/temas`;
    return this.get<Tema[]>(url);
  }

  deletePost(id: number) {
    const url = `${environment.BlogServiceBaseUrl}user/foro/${id}`;
    return this.http.delete<Foro>(url).pipe(
      retry(5), // Retries 5 times until successful
      catchError(this.handleError) // Uses this.handleError() to process any error in the request
    );
  }
  findById(
    id: number // : Observable<Employee>
  ) {
    const url = `${environment.BlogServiceBaseUrl}public/foro/${id}`;
    return this.get<Foro>(url);
  }

  create(foro: Foro) {
    const url = `http://localhost:8080/admin/foro`;
    return this.post(url, {
      name: foro.name,
      descripcion: foro.descripcion,
    });
  }

  update(foro: Foro) {
    const url = `${environment.BlogServiceBaseUrl}user/foro/${foro.id}`;
    return this.put(url, {
      name: foro.name,
      descripcion: foro.descripcion,
    });
  }
}
