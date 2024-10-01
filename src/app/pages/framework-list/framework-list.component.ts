import { Component, inject } from '@angular/core';
import { FrameworkService } from '../../services/framework.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './framework-list.component.html',
})
export class FrameworkListComponent {
  private readonly frameworkService = inject(FrameworkService);

  frameworks = this.frameworkService.getListado();
}
