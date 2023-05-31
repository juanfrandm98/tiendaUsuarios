import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  constructor() {}

  getListaUsuarios() {
    return localStorage.getItem('listaUsuarios')!;
  }

  getUsuario(id: number) {
    // Obtenemos la lista de usuarios de localStorage, parseándola para convertirla en el Array de personas
    let lista: Array<Persona> = JSON.parse(localStorage.getItem('listaUsuarios')!);
    // Devolvemos el usuario deseado
    // Podrían haberse usado tanto la función find como la función filter, pero dado a que queremos encontrar usuarios
    // con ids únicos, es mejor find, ya que para de buscar cuando encuentra la primera coincidencia
    return lista.find(x => x.id === id);
  }

  addUsuario(nuevoUsuario: Persona) {
    // Obtenemos la lista de usuarios de localStorage, parseándola para convertirla en el Array de personas
    let lista: Array<Persona> = JSON.parse(localStorage.getItem('listaUsuarios')!);

    // Comprobamos si existe la lista
    if(lista) {
      // Si existe, el ID del usuario será el tamaño de la lista antes de introducirlo en ella
      nuevoUsuario.id = lista.length;
      lista.push(nuevoUsuario);
    } else {
      // Si no existe, el ID por defecto que viene del formulario es 0
      lista = [nuevoUsuario];
    }
    
    // Actualizamos la lista de usuarios en localStorage, haciéndola un string para que pueda almacenarse
    localStorage.setItem('listaUsuarios', JSON.stringify(lista));
  }

  editUsuario(nuevaInfo: Persona) {
    // Obtenemos la lista de usuarios de localStorage, parseándola para convertirla en el Array de personas
    let lista: Array<Persona> = JSON.parse(localStorage.getItem('listaUsuarios')!);

    // Para gestionar esta operación, vamos a aprovechar que el ID de cada usuario es su posición en el array
    // En primer lugar, comprobamos que el ID del usuario proporcionado corresponda a un elemento válido del array
    if(nuevaInfo.id < lista.length) {
      // Modificamos el usuario correspondiente
      lista[nuevaInfo.id] = nuevaInfo;

      // Actualizamos la lista de usuarios en localStorage, haciéndola un string para que pueda almacenarse
      localStorage.setItem('listaUsuarios', JSON.stringify(lista));
    }
  }

  login(email: string, contrasenia: string) {
    let lista = JSON.parse(localStorage.getItem('listaUsuarios')!); 
  }
}
