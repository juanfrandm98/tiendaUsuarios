import { Component } from '@angular/core';
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

  prueba() {
    console.log(this.servicioUsuarios.getUsuario(this.usuario.telefono))
  }

  edit() {
    console.log(this.servicioUsuarios.getListaUsuarios());
    this.servicioUsuarios.editUsuario(this.usuario);
    console.log(this.servicioUsuarios.getListaUsuarios());
  }
}
