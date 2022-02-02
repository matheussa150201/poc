import { Noticia } from '../cliente/noticia';
import { Component, OnInit } from '@angular/core';
import { CadastrarNoticiaService } from './cadastrar-noticia.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-cadastrar-noticia',
  templateUrl: './cadastrar-noticia.component.html',
  styleUrls: ['./cadastrar-noticia.component.scss']
})
export class CadastrarNoticiaComponent implements OnInit {

  noticia: Noticia

  constructor(
     private service : CadastrarNoticiaService
    ) {
    this.noticia = new Noticia;
  }

  ngOnInit() {
  }

  criarNoticia(){
    this.service.criarNoticia(this.noticia).subscribe(() => {
      console.log("OK")
    } )

  }

}
