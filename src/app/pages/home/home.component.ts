import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  descripcion: string = 'Creando nuestra primera aplicación en angular v18';
  isLive: boolean = true;
  isOffline = signal(false);
  frameworkName: string = 'Angular';
  constructor() {}

  onChangeName() {
    this.frameworkName = 'Angular 18';
    this.descripcion = 'Este es un directo sobre angular';
  }
}
