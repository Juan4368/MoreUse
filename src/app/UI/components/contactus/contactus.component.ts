import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit { //inicializa el formulario cada vez que se ejecuta un cambio

  contacusForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.contacusForm = this.formBuilder.group({
      name: ['name', [
        Validators.required
      ]
      ],
      email: ['email', [
        Validators.required,
        Validators.email
      ]
      ],
      message: ['message', [
        Validators.required,
        Validators.maxLength(260)
      ]]
    })
  }

  send() {
    if (this.contacusForm.valid) {
      alert('Mensaje enviado con exito')
    }
    else {
      alert('valida por favor los campos');
    }
  }

}
