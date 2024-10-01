import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FrameworksComponent } from './components/frameworks/frameworks.component';
import { NavbarComponent } from './shared/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrameworksComponent, RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
