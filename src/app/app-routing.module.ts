import { CadastrarNoticiaComponent } from './pages/cadastrar-noticia/cadastrar-noticia.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'cadastrar-noticia', component: CadastrarNoticiaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
