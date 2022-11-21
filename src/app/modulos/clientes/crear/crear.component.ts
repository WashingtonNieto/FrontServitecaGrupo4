import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    identificacion: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    correo: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private clienteServicio: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  crearCliente() {
    let cliente = new Cliente();
    cliente.identificacion = this.fgValidator.controls["identificacion"].value;
    cliente.nombre = this.fgValidator.controls["nombre"].value;
    cliente.telefono = this.fgValidator.controls["telefono"].value;
    cliente.correo = this.fgValidator.controls["correo"].value;
    this.clienteServicio.crearCliente(cliente).subscribe({
      next: (cliente) => {
        alert("Cliente almacenado");
        this.router.navigate(["/clientes"]);
      },
      error: (error) => { alert("error almacenando el cliente"); }
    })
  }

}
