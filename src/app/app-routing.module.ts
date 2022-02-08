import { ModalExcluirComponent } from './components/modal-excluir/modal-excluir.component';
import { CadastrarNoticiaComponent } from './pages/cadastrar-noticia/cadastrar-noticia.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarNoticiaComponent } from './pages/editar-noticia/editar-noticia.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'noticia', component: NoticiaComponent },
  { path: 'excluir-noticia/:_id', component: ModalExcluirComponent },
  { path: 'cadastrar-noticia', component: CadastrarNoticiaComponent },
  { path: 'editar-noticia/:_id', component: EditarNoticiaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
