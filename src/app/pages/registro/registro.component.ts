import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ServicioUsuariosService } from 'src/app/services/servicio-usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario: Persona = new Persona(0, "admin@gmail.com", "admin", "Prueba", "Probador", 546987123);

  constructor(private servicioUsuarios: ServicioUsuariosService) { }

  registrarUsuario() {
    this.servicioUsuarios.addUsuario(this.usuario);
  }
}
