import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    // Outros campos do usuário
  };
  novoUsuario = false;

  constructor(
   private route: ActivatedRoute,
    private router: Router,
   private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      if (userId === 'novo') {
        this.novoUsuario = true;
      } else {
        this.usuarioService.getUsuarioById(userId).subscribe(usuario => {
          this.usuario = usuario;
        });
        this.novoUsuario = false;
      }
    });
  }

  salvarUsuario(form: NgForm) {
    if (form.invalid) {
      
      return;
    }

    if (this.novoUsuario) {
      this.usuarioService.adicionarUsuario(this.usuario).subscribe(() => {
        this.router.navigate(['/']); 
      });
    } else {
      this.usuarioService.atualizarUsuario(this.usuario).subscribe(() => {
        this.router.navigate(['/']); 
      });
    }
  }

  cancelarEdicao() {
    this.router.navigate(['/']); 
  }
}
