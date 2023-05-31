import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  constructor() {}

  lista: Array<Persona> = [];

  getListaUsuarios(route: ActivatedRoute) {
    return route.snapshot.paramMap.get('listaUsuarios');
  }

  addUsuario(nuevoUsuario: Persona) {
    this.lista = JSON.parse(localStorage.getItem('listaUsuarios')!);

    if(this.lista) {
      this.lista.push(nuevoUsuario);
    } else {
      this.lista = [nuevoUsuario];
    }
    
    localStorage.setItem('listaUsuarios', JSON.stringify(this.lista));
  }

  login(email: string, contrasenia: string) {
    this.lista = JSON.parse(localStorage.getItem('listaUsuarios')!);
  }
}
