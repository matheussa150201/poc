import { Noticia } from './../cliente/noticia';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrarNoticiaService {

  baseUrl = "http://localhost:5000/noticias"

  constructor( private http: HttpClient) { }

  criarNoticia(noticia: Noticia): Observable<Noticia> {
    return this.http.post<Noticia>(this.baseUrl, noticia);
  }

}
