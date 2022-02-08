import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../noticia/noticia';
import { NoticiaService } from '../noticia/noticia.service';

@Component({
  selector: 'app-ler-mais',
  templateUrl: './ler-mais-noticia.component.html',
  styleUrls: ['./ler-mais-noticia.component.scss'],
})
export class LerMaisComponent implements OnInit {
  @Input() noticiaRecebida: Noticia;

  id: string;

  constructor(
    private router: ActivatedRoute,
    private noticiaService: NoticiaService
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
}
