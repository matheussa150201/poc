import { Noticia } from './noticia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  noticia:Noticia;

  constructor() {
  }

  ngOnInit(): void {
  }

  excluir(){

  }

  editar(){

  }

}
