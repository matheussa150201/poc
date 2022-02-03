import { Noticia } from './noticia';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:5000/noticias"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  listaNoticia(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.baseUrl)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deletaNoticia(id: string) {
    return this.http.delete<Noticia>(this.baseUrl)
    .pipe(
    retry(1),
    catchError(this.handleError)
  )
  }

  atualizarNoticia(noticia: Noticia): Observable<Noticia> {
    return this.http.put<Noticia>(this.baseUrl, noticia)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
