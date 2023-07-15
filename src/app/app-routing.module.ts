import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' }, // Rota inicial redirecionada para lista de usuários
  { path: 'lista', component: ListaUsuariosComponent }, // Rota para lista de usuários
  // Outras rotas do seu projeto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
