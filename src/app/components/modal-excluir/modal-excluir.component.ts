import { Noticia } from '../../pages/noticia/noticia';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../pages/noticia/noticia.service';
import { EditarNoticiaService } from './../../pages/editar-noticia/editar-noticia.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-excluir',
  templateUrl: './modal-excluir.component.html',
  styleUrls: ['./modal-excluir.component.css']
})
export class ModalExcluirComponent implements OnInit {

  @Input() noticiaRecebida: Noticia;

  noticia:Noticia;
  id: string;

  constructor(
    private service : EditarNoticiaService,
    private clienteService: ClienteService,
    private mudarRota: Router,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let params = this.router.params
    params.subscribe( urlParams => {
      this.id = urlParams["_id"]
      if(this.id){
        this.clienteService.obterNoticiaPorId(this.id).subscribe(
          res => this.noticiaRecebida = res,
           error => this.noticiaRecebida = new Noticia())
      }
    })
   }

   excluir(noticia: Noticia){
    const id = noticia._id
    this.clienteService.deletaNoticia(id)
      .subscribe(
        response => {
          this.ngOnInit()
        },
        error => {
          console.log(error);
        })
  }

}
