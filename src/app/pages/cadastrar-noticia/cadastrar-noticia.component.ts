import { NoticiaService } from '../noticia/noticia.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Noticia } from '../noticia/noticia';
import { Component, OnInit } from '@angular/core';
import { CadastrarNoticiaService } from './cadastrar-noticia.service';

@Component({
  selector: 'app-cadastrar-noticia',
  templateUrl: './cadastrar-noticia.component.html',
  styleUrls: ['./cadastrar-noticia.component.scss'],
})
export class CadastrarNoticiaComponent implements OnInit {
  noticia: Noticia;
  id: string;

  constructor(
    private service: CadastrarNoticiaService,
    private noticiaService: NoticiaService,
    private mudarRota: Router,
    private router: ActivatedRoute
  ) {
    this.noticia = new Noticia();
  }

  ngOnInit() {
    let params = this.router.params;
    params.subscribe((urlParams) => {
      this.id = urlParams['_id'];
      console.log(urlParams);
      if (this.id) {
        this.noticiaService.obterNoticiaPorId(this.id).subscribe(
          (res) => (this.noticia = res),
          (error) => (this.noticia = new Noticia())
        );
      }
    });
  }

  salvarNoticia() {
    this.service.criarNoticia(this.noticia).subscribe((res) => {
      this.mudarRota.navigate(['/noticia']);
    });
  }
}
