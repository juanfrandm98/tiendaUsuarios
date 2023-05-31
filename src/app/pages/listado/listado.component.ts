import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
    usuarios = [
      {nombre: 'Jose Miguel', id: 14}
      
    ]
}
