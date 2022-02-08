import { Noticia } from '../noticia/noticia';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NoticiaService } from '../noticia/noticia.service';
import { Component, Input, OnInit } from '@angular/core';
import { EditarNoticiaService } from './editar-noticia.service';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.css'],
})
export class EditarNoticiaComponent implements OnInit {
  @Input() noticiaRecebida: Noticia;

  noticiaList: Noticia = {
    title: '',
    description: '',
  };

  noticia: Noticia;
  id: string;

  constructor(
    private service: EditarNoticiaService,
    private noticiaService: NoticiaService,
    private mudarRota: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    let params = this.router.params;
    params.subscribe((urlParams) => {
      this.id = urlParams['_id'];
      if (this.id) {
        this.noticiaService.obterNoticiaPorId(this.id).subscribe(
          (res) => (this.noticiaRecebida = res),
          (error) => (this.noticiaRecebida = new Noticia())
        );
      }
    });
  }

  editarNoticia() {
    this.service.atualizarNoticia(this.noticiaRecebida).subscribe((res) => {
      console.log(res);
    });
  }
}
