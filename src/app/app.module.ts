import { CadastrarNoticiaComponent } from './pages/cadastrar-noticia/cadastrar-noticia.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { EditarNoticiaComponent } from './pages/editar-noticia/editar-noticia.component';
import { ModalExcluirComponent } from './pages/excluir-noticia/excluir-noticia.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { LerMaisComponent } from './pages/ler-mais-noticia/ler-mais-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoticiaComponent,
    CadastrarNoticiaComponent,
    EditarNoticiaComponent,
    ModalExcluirComponent,
    LerMaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
