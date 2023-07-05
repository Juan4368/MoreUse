import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit { //inicializa el formulario cada vez que se ejecuta un cambio
  contacusForm!: FormGroup;
  public validationMessages = {
  email: [
    { type: 'required', message: 'Este campo es requerido' },
    { type: 'email', message: 'Este campo es de tipo email' }
  ]
}

  
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.contacusForm = this.formBuilder.group({
      name: ['name', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')]
      
      ],
      email: ['email', [
        Validators.required,
        Validators.email
      ]
      ],
      message: ['message', [
        Validators.required,
        Validators.maxLength(250)
      ]]
    })
  }

  send() {
    if (this.contacusForm.valid) {
      alert('Mensaje enviado con exito')
    }
    else {
      alert('El mensaje no pudo ser enviado');
    }
  }

  public get campos() {
    return this.contacusForm.controls
  }
}
