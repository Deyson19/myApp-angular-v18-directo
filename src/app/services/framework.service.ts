import { Injectable } from '@angular/core';
import { Framework } from '../interfaces/framework.interface';
import { signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FrameworkService {
  constructor() {}

  private frameworksList: WritableSignal<Framework[]> = signal([
    {
      name: 'Angular',
      version: '18.2.16',
      isFrontend: true,
      isBackEnd: false,
      language: 'TypeScript',
    },
    {
      name: 'React',
      version: '18.2.0',
      isFrontend: true,
      isBackEnd: false,
      language: 'JavaScript',
    },
    {
      name: 'Vue.js',
      version: '3.2.37',
      isFrontend: true,
      isBackEnd: false,
      language: 'JavaScript',
    },
    {
      name: 'Node.js',
      version: '18.2.0',
      isFrontend: false,
      isBackEnd: true,
      language: 'JavaScript',
    },
    {
      name: 'Django',
      version: '4.2.3',
      isFrontend: false,
      isBackEnd: true,
      language: 'Python',
    },
    {
      name: 'Flask',
      version: '2.1.3',
      isFrontend: false,
      isBackEnd: true,
      language: 'Python',
    },
    {
      name: 'Laravel',
      version: '8.2.0',
      isFrontend: false,
      isBackEnd: true,
      language: 'PHP',
    },
    {
      name: 'Spring Boot',
      version: '3.0.0',
      isFrontend: false,
      isBackEnd: true,
      language: 'Java',
    },
    {
      name: '.NET',
      version: '9.0',
      isFrontend: false,
      isBackEnd: true,
      language: 'C#',
    },
  ]);

  public getListado(): Framework[] {
    return this.frameworksList();
  }
}
