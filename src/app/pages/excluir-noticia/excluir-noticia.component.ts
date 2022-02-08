import { Noticia } from '../noticia/noticia';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiaService } from '../noticia/noticia.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalExcluirService } from './excluir-noticia.service';

@Component({
  selector: 'app-excluir-noticia',
  templateUrl: './excluir-noticia.component.html',
  styleUrls: ['./excluir-noticia.component.css'],
})
export class ModalExcluirComponent implements OnInit {
  @Input() noticiaRecebida: Noticia;

  noticia: Noticia;
  id: string;

  constructor(
    private service: ModalExcluirService,
    private noticiaService: NoticiaService,
    private router: ActivatedRoute,
    private mudarRota: Router
  ) {}

  ngOnInit(): void {
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

  excluir(noticia: Noticia) {
    const id = noticia._id;
    this.service.deletaNoticia(id).subscribe(
      (response) => {
        this.mudarRota.navigate(['/noticia']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
