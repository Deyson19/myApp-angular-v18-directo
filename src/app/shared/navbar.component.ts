import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-sm navbar-dark bg-info m-2">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">App - Angular</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarID"
          aria-controls="navbarID"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarID">
          <ul class="navbar-nav mr-auto mt-2 ">
            @for (navItem of myMenuItems(); track navItem.name) {
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                [routerLink]="navItem.path"
                >{{ navItem.name }}</a
              >
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  constructor() {}

  public myMenuItems: WritableSignal<MenuItems[]> = signal([
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
    {
      name: 'Users',
      path: '/users',
    },
    {
      name: 'Frameworks',
      path: '/frameworks',
    },
  ]);
}
interface MenuItems {
  name: string;
  path: string;
  icon?: string;
}
