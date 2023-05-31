import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { ServicioUsuariosService } from 'src/app/services/servicio-usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario: Persona = new Persona(0, "", "", "", "", 0);

  constructor(private servicioUsuarios: ServicioUsuariosService) {}

  registrarUsuario() {
    this.servicioUsuarios.addUsuario(this.usuario);
  }
}
