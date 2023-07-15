import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getUsuarioById(id: string): Observable<Usuario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }

  atualizarFotoUsuario(id: string, foto: File): Observable<any> {
    const url = `${this.apiUrl}/${id}/foto`;
    const formData = new FormData();
    formData.append('foto', foto);
    return this.http.post(url, formData);
  }

  adicionarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }

  atualizarUsuario(usuario: Usuario): Observable<any> {
    const url = `${this.apiUrl}/${usuario.id}`;
    return this.http.put(url, usuario);
  }

  excluirUsuario(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
