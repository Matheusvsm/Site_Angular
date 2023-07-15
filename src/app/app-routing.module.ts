import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'lista', component: ListaUsuariosComponent },
  { path: 'adicionar', component: EditarUsuarioComponent }, // Rota para adicionar usuário
  { path: 'editar/:id', component: EditarUsuarioComponent }, // Rota para editar usuário
  // Outras rotas do seu projeto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
