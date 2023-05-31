import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent {
  usuario: Persona | null = new Persona(-1, "", "", "", "", 0);

  constructor (route: ActivatedRoute){
    let id = route.snapshot.paramMap.get('usuario')

    if(id) {
      // Llamar al servicio de usuarios para obtener el usuario
    }
  }
}
