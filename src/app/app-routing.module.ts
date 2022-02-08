import { ModalExcluirComponent } from './pages/excluir-noticia/excluir-noticia.component';
import { CadastrarNoticiaComponent } from './pages/cadastrar-noticia/cadastrar-noticia.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarNoticiaComponent } from './pages/editar-noticia/editar-noticia.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { LerMaisComponent } from './pages/ler-mais-noticia/ler-mais-noticia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'noticia', component: NoticiaComponent },
  { path: 'excluir-noticia/:_id', component: ModalExcluirComponent },
  { path: 'cadastrar-noticia', component: CadastrarNoticiaComponent },
  { path: 'editar-noticia/:_id', component: EditarNoticiaComponent },
  { path: 'ler-mais/:_id', component: LerMaisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
