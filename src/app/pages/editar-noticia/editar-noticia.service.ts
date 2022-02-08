import { Noticia } from '../noticia/noticia';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EditarNoticiaService {
  baseUrl = 'http://localhost:5000/noticias';

  noticiaRecebida: Noticia = {
    id: '',
    title: '',
    description: '',
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  atualizarNoticia(noticiaAtualizada: Noticia): Observable<Noticia> {
    this.noticiaRecebida.id = noticiaAtualizada._id;
    this.noticiaRecebida.title = noticiaAtualizada.title;
    this.noticiaRecebida.description = noticiaAtualizada.description;
    return this.http.put<Noticia>(this.baseUrl, this.noticiaRecebida);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
