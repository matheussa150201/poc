import { Noticia } from './noticia';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  noticia: Noticia[];

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

  excluir(id: string) {
    this.service.deletaNoticia(id);
  }

  editar(noticia: Noticia) {
    this.service
      .atualizarNoticia(noticia)
      .subscribe((res) => {
        //modal
      });
  }

}
