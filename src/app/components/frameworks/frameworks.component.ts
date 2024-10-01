import { Component, computed, Signal } from '@angular/core';
import { Framework } from '../../interfaces/framework.interface';
import { CommonModule } from '@angular/common';
import { FrameworkService } from '../../services/framework.service';

@Component({
  selector: 'app-frameworks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frameworks.component.html',
  styleUrl: './frameworks.component.css',
})
export class FrameworksComponent {
  constructor(private frameworkService: FrameworkService) {}
  public angular: Framework = {
    name: 'Angular',
    version: '18.2.16',
    isFrontend: true,
    isBackEnd: false,
    language: 'TypeScript',
  };

  public frameworksList: Signal<Framework[]> = computed(() => {
    return this.frameworkService.getListado();
  });
}
