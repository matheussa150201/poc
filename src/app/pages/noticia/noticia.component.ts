import { Noticia } from './noticia';
import { Component, OnInit, Output } from '@angular/core';
import { ClienteService } from './noticia.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Output() noticiaCompartilhada : Noticia;

  noticia: Noticia[];
  bolEditar: boolean = false;
  bolExcluir: boolean = false;
  id: number;

  noticiaList: Noticia = {
    title: '',
    description: '',
  };

  constructor(
    private service: ClienteService,
    private router: ActivatedRoute,
    private mudarRota: Router
  ) {}

  ngOnInit(): void {
    this.service.listaNoticia().subscribe(
      (res) => {
        this.noticia = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editar(){
    this.bolEditar = true;
  }

  excluir(){
    this.bolExcluir = true;
  }
}
