import { Component, Input } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { ServicioUsuariosService } from 'src/app/services/servicio-usuarios.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  usuario: Persona = new Persona(0, "", "", "", "", 0);
  @Input() id: number = 0;

  ngOnInit() {
    this.usuario = this.servicioUsuarios.getUsuario(this.id)!;
  }

  constructor(private servicioUsuarios: ServicioUsuariosService) {}

  editarUsuario() {
    this.servicioUsuarios.editUsuario(this.usuario);
  }

}
