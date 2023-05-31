import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  constructor() {}

  lista: Array<Persona> = [];

  getListaUsuarios() {
    return localStorage.getItem('listaUsuarios')!;
  }

  addUsuario(nuevoUsuario: Persona) {
    // Obtenemos la lista de usuarios de localStorage, parseándola para convertirla en el Array de personas
    this.lista = JSON.parse(localStorage.getItem('listaUsuarios')!);

    // Comprobamos si existe la lista
    if(this.lista) {
      // Si existe, el ID del usuario será el tamaño de la lista antes de introducirlo en ella
      nuevoUsuario.id = this.lista.length;
      this.lista.push(nuevoUsuario);
    } else {
      // Si no existe, el ID por defecto que viene del formulario es 0
      this.lista = [nuevoUsuario];
    }
    
    // Actualizamos la lista de usuarios en localStorage, haciéndola un string para que pueda almacenarse
    localStorage.setItem('listaUsuarios', JSON.stringify(this.lista));
  }

  login(email: string, contrasenia: string) {
    this.lista = JSON.parse(localStorage.getItem('listaUsuarios')!); 
  }
}
