import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  public contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      asunto: ['', [Validators.maxLength(5), Validators.required]],
      mensaje: '',
      email: '',
    });
  }

  onSubmit() {
    console.log('Formulario de Contacto:', this.contactForm.value);
    alert('Se ha enviado el formulario.');
  }
}
interface ContactForm {
  asunto: string;
  mensaje: string;
  email: string;
}
