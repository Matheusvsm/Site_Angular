import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
  };
  novoUsuario = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.usuarioForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      if (userId === 'novo') {
        this.novoUsuario = true;
      } else {
        this.usuarioService.getUsuarioById(userId).subscribe(usuario => {
          this.usuario = usuario;
          this.usuarioForm.patchValue(usuario); 
        });
        this.novoUsuario = false;
      }
    });
  }

  salvarUsuario() {
    if (this.novoUsuario) {
      this.usuarioService.adicionarUsuario(this.usuarioForm.value).subscribe(() => {
        this.router.navigate(['/']); 
      });
    } else {
      this.usuarioService.atualizarUsuario(this.usuarioForm.value).subscribe(() => {
        this.router.navigate(['/']); 
      });
    }
  }

  cancelarEdicao() {
    this.router.navigate(['/']); 
  }
}
