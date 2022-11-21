import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  clientes: Cliente[] = [];
  constructor(private clienteServicio: ClienteService) { }


  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes() {
    this.clienteServicio.obtenerClientes()
      .subscribe(clientes => this.clientes = clientes);
  }

  eliminarCliente(id: any) {
    if (confirm("Desea eliminar este cliente?")) {
      this.clienteServicio.eliminarCliente(id).subscribe({
        next: (any) => {
          alert("Cliente eliminado");
          this.cargarClientes();
        },
        error: (error) => { alert("error eliminando el cliente"); }
      })
    }
  }

}
