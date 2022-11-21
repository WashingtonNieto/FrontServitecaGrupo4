import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id: String = "";

  fgValidator: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    identificacion: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    correo: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private clienteServicio: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.cargarCliente();
  }


  cargarCliente() {
    this.clienteServicio.buscarCliente(this.id)
      .subscribe(cliente => {
        this.fgValidator.controls["id"].setValue(cliente.id);
        this.fgValidator.controls["identificacion"].setValue(cliente.identificacion);
        this.fgValidator.controls["nombre"].setValue(cliente.nombre);
        this.fgValidator.controls["telefono"].setValue(cliente.telefono);
        this.fgValidator.controls["correo"].setValue(cliente.correo);
      });
  }

  actualizarCliente() {
    let cliente = new Cliente();
    cliente.id = this.fgValidator.controls["id"].value;
    cliente.identificacion = this.fgValidator.controls["identificacion"].value;
    cliente.nombre = this.fgValidator.controls["nombre"].value;
    cliente.telefono = this.fgValidator.controls["telefono"].value;
    cliente.correo = this.fgValidator.controls["correo"].value;
    this.clienteServicio.actualizarCliente(cliente).subscribe({
      next: (cliente) => {
        alert("Cliente actualizado");
        this.router.navigate(["/clientes"]);
      },
      error: (error) => { alert("error actualizando el cliente"); }
    })
  }


}
