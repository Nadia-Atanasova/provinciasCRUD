import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProvinciasCRUDModule} from "../modules/provincias-crud/provincias-crud.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProvinciasCRUDModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'provinciasCRUD';
}
