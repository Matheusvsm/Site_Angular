import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.getUsuarios().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
  }

  editarUsuario(id: number) {
    this.router.navigate(['/editar', id]); // Redireciona para a página de edição com o ID do usuário
  }

  adicionarUsuario() {
    this.router.navigate(['/adicionar']); // Redireciona para a página de adição de usuário
  }

  excluirUsuario(id: number) {
    this.usuarioService.excluirUsuario(id).subscribe(() => {
      this.carregarUsuarios();
    });
  }
}
